import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';

import { PanelSection } from '../../components';
import { ToolSettings } from '../OHIFToolSettings';

const ItemsPerRow = 4;

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

/**
 * Just refactoring from the toolbox component to make it more readable
 */
function ToolboxUI(props: withAppTypes) {
  const {
    toolbarButtons,
    handleToolSelect,
    toolboxState,
    numRows,
    servicesManager,
    title,
    useCollapsedPanel = true,
  } = props;

  const { activeTool, toolOptions, selectedEvent } = toolboxState;
  const activeToolOptions = toolOptions?.[activeTool];

  const prevToolOptions = usePrevious(activeToolOptions);

  useEffect(() => {
    if (!activeToolOptions || Array.isArray(activeToolOptions) === false) {
      return;
    }

    activeToolOptions.forEach((option, index) => {
      const prevOption = prevToolOptions ? prevToolOptions[index] : undefined;
      if (!prevOption || option.value !== prevOption.value || selectedEvent) {
        const isOptionValid = option.condition
          ? option.condition({ options: activeToolOptions })
          : true;
        if (isOptionValid) {
          const { commands } = option;
          commands(option.value);
        }
      }
    });
  }, [activeToolOptions, selectedEvent]);

  const render = () => {
    return (
      <>
        <div className="flex flex-col">
          <div className="bg-muted mt-0.5 flex flex-wrap space-x-2 py-2 px-1">
            {toolbarButtons.map((toolDef, index) => {
              if (!toolDef) {
                return null;
              }

              const { id, Component, componentProps } = toolDef;
              const isLastRow = Math.floor(index / ItemsPerRow) + 1 === numRows;

              const toolClasses = `ml-1 ${isLastRow ? '' : 'mb-2'}`;

              const onInteraction = ({ itemId, id, commands }) => {
                const idToUse = itemId || id;
                handleToolSelect(idToUse);
                props.onInteraction({
                  itemId,
                  commands,
                });
              };

              return (
                <div
                  key={id}
                  className={classnames({
                    [toolClasses]: true,
                  })}
                >
                  <Component
                    {...componentProps}
                    {...props}
                    id={id}
                    servicesManager={servicesManager}
                    onInteraction={onInteraction}
                    size="toolbox"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-primary-dark h-auto px-2">
          {activeToolOptions && <ToolSettings options={activeToolOptions} />}
        </div>
      </>
    );
  };

  return (
    <>
      {useCollapsedPanel ? (
        <PanelSection>
          <PanelSection.Header>
            <span>{title}</span>
          </PanelSection.Header>
          <PanelSection.Content className="flex-shrink-0">{render()}</PanelSection.Content>
        </PanelSection>
      ) : (
        render()
      )}
    </>
  );
}

export { ToolboxUI };
