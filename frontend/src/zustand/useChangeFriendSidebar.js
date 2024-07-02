import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useChangeFriendSidebar = create(
  persist(
    (set) => ({
      isShowAddFriend: false,
      isShowNotifications: false,

      showAddFriend: () => set({ isShowAddFriend: true, isShowNotifications: false }),
      showNotifications: () => set({ isShowAddFriend: false, isShowNotifications: true }),
    }),
    {
      name: 'friend-sidebar-state',
    }
  )
);

export default useChangeFriendSidebar;
