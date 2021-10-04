import { getAllNotifications, getMyNotifications } from 'api/notifications';
import { useQuery } from 'react-query';

function useMyNotif() {
  return useQuery('my-notif', getMyNotifications);
}
function useAllNotifications() {
  return useQuery('notifications', getAllNotifications);
}

export { useMyNotif, useAllNotifications };
