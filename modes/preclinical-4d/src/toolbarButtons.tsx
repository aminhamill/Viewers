import { defaults, ToolbarService } from '@ohif/core';
import { toolGroupIds } from './initToolGroups';

const { createButton } = ToolbarService;

const setToolActiveToolbar = {
  commandName: 'setToolActiveToolbar',
  commandOptions: {
    toolGroupIds: [toolGroupIds.PT, toolGroupIds.CT, toolGroupIds.Fusion, toolGroupIds.default],
  },
};

const toolbarButtons = [
  {
    id: 'MeasurementTools',
    uiType: 'ohif.toolButtonList',
    props: {
      groupId: 'MeasurementTools',
      evaluate: 'evaluate.group.promoteToPrimaryIfCornerstoneToolNotActiveInTheList',
      primary: createButton({
        id: 'Length',
        icon: 'tool-length',
        label: 'Length',
        tooltip: 'Length Tool',
        commands: setToolActiveToolbar,
        evaluate: 'evaluate.cornerstoneTool',
      }),
      secondary: {
        icon: 'chevron-down',
        tooltip: 'More Measure Tools',
      },
      items: [
        {
          id: 'Length',
          icon: 'tool-length',
          label: 'Length',
          tooltip: 'Length Tool',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        },
        {
          id: 'Bidirectional',
          icon: 'tool-bidirectional',
          label: 'Bidirectional',
          tooltip: 'Bidirectional Tool',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        },
        {
          id: 'ArrowAnnotate',
          icon: 'tool-annotate',
          label: 'Annotation',
          tooltip: 'Arrow Annotate',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        },
        {
          id: 'EllipticalROI',
          icon: 'tool-ellipse',
          label: 'Ellipse',
          tooltip: 'Ellipse ROI',
          commands: setToolActiveToolbar,
          evaluate: 'evaluate.cornerstoneTool',
        },
      ],
    },
  },
  {
    id: 'Zoom',
    uiType: 'ohif.toolButton',
    props: {
      icon: 'tool-zoom',
      label: 'Zoom',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  {
    id: 'WindowLevel',
    uiType: 'ohif.toolButton',
    props: {
      icon: 'tool-window-level',
      label: 'Window Level',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  {
    id: 'Pan',
    uiType: 'ohif.toolButton',
    props: {
      type: 'tool',
      icon: 'tool-move',
      label: 'Pan',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  {
    id: 'TrackballRotate',
    uiType: 'ohif.toolButton',
    props: {
      type: 'tool',
      icon: 'tool-3d-rotate',
      label: '3D Rotate',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  {
    id: 'Capture',
    uiType: 'ohif.radioGroup',
    props: {
      icon: 'tool-capture',
      label: 'Capture',
      commands: 'showDownloadViewportModal',
      evaluate: [
        'evaluate.action',
        {
          name: 'evaluate.viewport.supported',
          unsupportedViewportTypes: ['video', 'wholeSlide'],
        },
      ],
    },
  },
  {
    id: 'Layout',
    uiType: 'ohif.layoutSelector',
    props: {
      rows: 3,
      columns: 4,
      evaluate: 'evaluate.action',
    },
  },
  {
    id: 'Crosshairs',
    uiType: 'ohif.toolButton',
    props: {
      type: 'tool',
      icon: 'tool-crosshair',
      label: 'Crosshairs',
      commands: setToolActiveToolbar,
      evaluate: 'evaluate.cornerstoneTool',
    },
  },
  {
    id: 'ProgressDropdown',
    uiType: 'ohif.progressDropdown',
  },
  {
    id: 'RectangleROIStartEndThreshold',
    uiType: 'ohif.radioGroup',
    props: {
      icon: 'tool-create-threshold',
      label: 'Rectangle ROI Threshold',
      commands: setToolActiveToolbar,
      evaluate: {
        name: 'evaluate.cornerstone.segmentation',
        toolNames: ['RectangleROIStartEndThreshold'],
      },
      options: 'tmtv.RectangleROIThresholdOptions',
    },
  },
];

export default toolbarButtons;
