import Link, { LinkProps } from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { appPalette } from '../theme';

const colors = appPalette();

const breadcrumbNameMap: { [key: string]: string } = {
  news: 'News',
  about: 'About us',
  contacts: 'Contacts',
};

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return (
    <Link
      sx={{ '&:hover': { color: colors.main!.orange } }}
      {...props}
      component={RouterLink}
    />
  );
}

export function AppBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <LinkRouter
        underline='hover'
        color={colors.secondary?.breadсrumbsGray}
        to='/'
      >
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = value;

        return last ? (
          <Typography color={colors.main?.white} key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter
            underline='hover'
            color={colors.secondary?.breadсrumbsGray}
            to={to}
            key={to}
          >
            <Typography color='inherit'>{breadcrumbNameMap[to]}</Typography>
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
