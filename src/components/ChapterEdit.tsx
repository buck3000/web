import { Fragment, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { Chapter, SnackbarAction } from '@zoonk/models';
import { deleteChapter, updateChapter } from '@zoonk/services';
import { firebaseError, GlobalContext, timestamp } from '@zoonk/utils';
import ChapterForm from './ChapterForm';
import Snackbar from './Snackbar';

interface ChapterEditProps {
  data: Chapter.Get;
}

/**
 * Form for updating a chapter.
 * @property `data` - current chapter data.
 */
const ChapterEdit = ({ data }: ChapterEditProps) => {
  const { translate, profile, user } = useContext(GlobalContext);
  const { push } = useRouter();
  const [snackbar, setSnackbar] = useState<SnackbarAction | null>(null);
  const canDelete = user?.role === 'admin' || user?.role === 'moderator';

  if (!user || !profile) {
    return null;
  }

  const handleDelete = () => {
    if (window.confirm(translate('chapter_delete_confirmation'))) {
      setSnackbar({ type: 'progress', msg: translate('deleting') });

      deleteChapter(data.id, profile, user.uid)
        .then(() => {
          setSnackbar(null);
          push('/topics/[id]', `/topics/${data.topics[0]}`);
        })
        .catch((e) => setSnackbar(firebaseError(e, 'chapter_delete')));
    }
  };

  const handleSubmit = (changes: Chapter.EditableFields) => {
    setSnackbar({ type: 'progress', msg: translate('saving') });

    updateChapter(
      {
        ...changes,
        updatedAt: timestamp,
        updatedBy: profile,
        updatedById: user.uid,
      },
      data.id,
    )
      .then(() => setSnackbar({ type: 'success', msg: translate('saved') }))
      .catch((e) => setSnackbar(firebaseError(e, 'chapter_edit')));
  };

  return (
    <Fragment>
      <ChapterForm
        saving={snackbar?.type === 'progress'}
        data={data}
        onDelete={canDelete ? handleDelete : undefined}
        onSubmit={handleSubmit}
      />
      <Snackbar action={snackbar} />
    </Fragment>
  );
};

export default ChapterEdit;
