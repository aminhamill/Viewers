// External
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import i18n from '@ohif/i18n';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import Compose from './routes/Mode/Compose';
import {
  ExtensionManager,
  CommandsManager,
  HotkeysManager,
  ServiceProvidersManager,
  SystemContextProvider,
} from '@ohif/core';
import {
  DialogProvider,
  Modal,
  ModalProvider,
  ThemeWrapper,
  ViewportDialogProvider,
  CineProvider,
  UserAuthenticationProvider,
} from '@ohif/ui';
import {
  ThemeWrapper as ThemeWrapperNext,
  NotificationProvider,
  ViewportGridProvider,
  TooltipProvider,
  ToolboxProvider,
} from '@ohif/ui-next';
import { AppConfigProvider } from '@state';
import createRoutes from './routes';
import appInit from './appInit.js';
import { ShepherdJourneyProvider } from 'react-shepherd';

// Custom Login Component
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        onLogin(data.accessToken);
      } else {
        setError('ورود ناموفق'); // "Login failed"
      }
    } catch (err) {
       setError('خطا در اتصال'); // "Connection error"
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100" dir="rtl">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <img src="/assets/transparent.png" />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="نام کاربری" // "Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="رمز عبور" // "Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-primary-main text-white rounded">
          ورود {/* "Login" */}
        </button>
      </form>
    </div>
  );
};

let commandsManager: CommandsManager,
  extensionManager: ExtensionManager,
  servicesManager: AppTypes.ServicesManager,
  serviceProvidersManager: ServiceProvidersManager,
  hotkeysManager: HotkeysManager;
import configFunc from '../public/config/default.js';
function App({
  config = {
    routerBaseName: '/',
    showLoadingIndicator: true,
    showStudyList: true,
    extensions: [],
  },
  defaultExtensions = [],
  defaultModes = [],
}) {
  const [init, setInit] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const run = async () => {
      appInit(config, defaultExtensions, defaultModes).then(setInit).catch(console.error);
    };

    run();
  }, []);

  if (!init) {
    return null;
  }

  commandsManager = init.commandsManager;
  extensionManager = init.extensionManager;
  servicesManager = init.servicesManager;
  serviceProvidersManager = init.serviceProvidersManager;
  hotkeysManager = init.hotkeysManager;

  const appConfigState = init.appConfig;
  const { routerBasename, modes, dataSources, showStudyList } = appConfigState;

  // Max 3D texture size
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2');
  if (gl) {
    const max3DTextureSize = gl.getParameter(gl.MAX_3D_TEXTURE_SIZE);
    appConfigState.max3DTextureSize = max3DTextureSize;
  }

  const {
    uiDialogService,
    uiModalService,
    uiViewportDialogService,
    viewportGridService,
    cineService,
    userAuthenticationService,
    uiNotificationService,
    customizationService,
  } = servicesManager.services;

  // Extend userAuthenticationService with custom JWT logic
  userAuthenticationService.setServiceImplementation({
    isAuthenticated: () => isAuthenticated,
    getAccessToken: async () => localStorage.getItem('token'),
    signIn: async (token) => {
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
    },
    signOut: async () => {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    },
    // Preserve other required methods
    getUser: async () => ({ username: 'testuser' }), // Dummy user info; adjust as needed
    clear: async () => {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
    },
  });

  const providers = [
    [AppConfigProvider, { value: appConfigState }],
    [UserAuthenticationProvider, { service: userAuthenticationService }],
    [I18nextProvider, { i18n }],
    [ThemeWrapperNext],
    [ThemeWrapper],
    [SystemContextProvider, { commandsManager, extensionManager, hotkeysManager, servicesManager }],
    [ToolboxProvider],
    [ViewportGridProvider, { service: viewportGridService }],
    [ViewportDialogProvider, { service: uiViewportDialogService }],
    [CineProvider, { service: cineService }],
    [NotificationProvider, { service: uiNotificationService }],
    [TooltipProvider],
    [DialogProvider, { service: uiDialogService }],
    [ModalProvider, { service: uiModalService, modal: Modal }],
    [ShepherdJourneyProvider],
  ];

  const providersFromManager = Object.entries(serviceProvidersManager.providers);
  if (providersFromManager.length > 0) {
    providersFromManager.forEach(([serviceName, provider]) => {
      providers.push([provider, { service: servicesManager.services[serviceName] }]);
    });
  }

  const CombinedProviders = ({ children }) => Compose({ components: providers, children });

  customizationService.init(extensionManager);

  const appRoutes = createRoutes({
    modes,
    dataSources,
    extensionManager,
    servicesManager,
    commandsManager,
    hotkeysManager,
    routerBasename,
    showStudyList,
  });

  const handleLogin = (token: string) => {
    console.log('Logging in with token:', token);
    localStorage.setItem('token', token); // Set token directly
    setIsAuthenticated(true);
    userAuthenticationService.signIn(token);
    console.log('isAuthenticated should now be true');
  };

  console.log('Rendering App, isAuthenticated:', isAuthenticated);
  return (
    <CombinedProviders>
      <BrowserRouter basename={routerBasename}>
        {isAuthenticated ? appRoutes : <Login onLogin={handleLogin} />}
      </BrowserRouter>
    </CombinedProviders>
  );
}

App.propTypes = {
  config: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      routerBaseName: PropTypes.string.isRequired,
      extensions: PropTypes.array,
    }),
  ]).isRequired,
  defaultExtensions: PropTypes.array,
  defaultModes: PropTypes.array,
};

export default App;

export { commandsManager, extensionManager, servicesManager };
