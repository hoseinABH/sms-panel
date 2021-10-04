import { createGroup, deleteGroup, getAllGroups, getGroupById, updateGroup } from 'api/groups';
import { useSnackbar } from 'notistack';
import { useMutation, useQuery, useQueryClient } from 'react-query';

function useAllGroups() {
  return useQuery('groups', getAllGroups);
}

function useGroup(id) {
  return useQuery(['group', id], () => getGroupById(id), { enabled: id !== undefined });
}

function useCreateGroup() {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  return useMutation((value) => createGroup(value), {
    onMutate: async (value) => {
      await queryClient.cancelQueries('groups');
      const previousGroups = queryClient.getQueryData('groups');

      queryClient.setQueryData('groups', (old) => ({
        ...old,
        data: {
          ...old.data,
          docs: [...old.data.docs, value],
        },
      }));
      return { previousGroups };
    },
    onError: (err, values, context) => {
      queryClient.setQueryData('groups', context.previousGroups);
    },
    onSettled: () => queryClient.invalidateQueries('groups'),
    onSuccess: () => enqueueSnackbar('گروه با موفقیت ایجاد شد', { variant: 'success' }),
  });
}

function useUpdateGroup() {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation(updateGroup, {
    onSuccess: (_, { id, ...variables }) => {
      queryClient.refetchQueries('groups');
      queryClient.refetchQueries(['group', id]);
      enqueueSnackbar('گروه با موفقیت ویرایش شد', { variant: 'success' });
    },
  });
}

function useDeleteGroup() {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation(deleteGroup, {
    onMutate: async (_, id) => {
      const groups = await queryClient.getQueryData('groups');
      const filteredGroups = await groups.data.docs.filter((item) => item._id !== id);
      const data = await {
        ...groups,
        data: {
          ...groups.data,
          docs: filteredGroups,
        },
      };
      queryClient.setQueryData('groups', data);
    },
    onSettled: () => queryClient.invalidateQueries('groups'),

    onSuccess: () => enqueueSnackbar('گروه با موفقیت حذف شد', { variant: 'info' }),
  });
}

export { useAllGroups, useGroup, useCreateGroup, useUpdateGroup, useDeleteGroup };
