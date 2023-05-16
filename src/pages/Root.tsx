import { AppThemeProvider } from '../context/appTheme';
import { Layout } from './Layout';
import { TopBarScroolProvider } from '../context/topBarScrool';

export const Root = () => {
  return (
    <AppThemeProvider>
      <TopBarScroolProvider>
        <div className='app'>
          <Layout />
        </div>
      </TopBarScroolProvider>
    </AppThemeProvider>
  );
};
