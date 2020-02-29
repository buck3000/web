import { useContext } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Button, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { GlobalContext, theme } from '@zoonk/utils';

const ChaptersHeader = () => {
  const { translate } = useContext(GlobalContext);
  const { query } = useRouter();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h5" component="h2">
        {translate('chapters')}
      </Typography>
      <div style={{ flexGrow: 1 }} />
      <NextLink
        href="/topics/[id]/chapters/add"
        as={`/topics/${query.id}/chapters/add`}
        passHref
      >
        <Button component="a" size="small" color="primary">
          <Add
            aria-label={translate('create')}
            style={{ marginRight: theme.spacing(0.5) }}
          />
          {translate('create')}
        </Button>
      </NextLink>
      <NextLink
        href="/topics/[id]/chapters"
        as={`/topics/${query.id}/chapters`}
        passHref
      >
        <Button component="a" size="small" color="secondary">
          {translate('edit')}
        </Button>
      </NextLink>
    </div>
  );
};

export default ChaptersHeader;
