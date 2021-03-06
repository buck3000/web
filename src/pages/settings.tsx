import { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { CircularProgress, Container, Grid } from '@material-ui/core';
import CredentialsUpdate from '@zoonk/components/CredentialsUpdate';
import LoginForm from '@zoonk/components/LoginForm';
import Meta from '@zoonk/components/Meta';
import ProfileUpdate from '@zoonk/components/ProfileUpdate';
import UserBreadcrumb from '@zoonk/components/UserBreadcrumb';
import UsernameUpdate from '@zoonk/components/UsernameUpdate';
import { analytics, GlobalContext, rootUrl, theme } from '@zoonk/utils';

const Settings: NextPage = () => {
  const { translate, profile, user } = useContext(GlobalContext);

  useEffect(() => {
    analytics().setCurrentScreen('settings');
  }, []);

  if (user === null || !profile) {
    return <LoginForm />;
  }

  if (!user) {
    return <CircularProgress />;
  }

  return (
    <Container component="main">
      <Meta
        title={translate('edit_profile')}
        description={translate('seo_settings_desc')}
        canonicalUrl={`${rootUrl}/settings`}
      />

      <UserBreadcrumb user={profile} title={translate('edit_profile')} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ProfileUpdate />
        </Grid>

        <Grid item xs={12} sm={6}>
          <UsernameUpdate />
          <div style={{ marginTop: theme.spacing(2) }} />
          <CredentialsUpdate />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Settings;
