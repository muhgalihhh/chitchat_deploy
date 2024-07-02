import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useChangeSidebar = create(
  persist(
    (set) => ({
      isShowDefault: true,
      isShowFriendList: false,
      isShowGroupList: false,
      activeTab: 'default',

      showDefault: () => set({ isShowDefault: true, isShowFriendList: false, isShowGroupList: false, activeTab: 'default' }),
      showFriendList: () => set({ isShowDefault: false, isShowFriendList: true, isShowGroupList: false, activeTab: 'friends' }),
      showGroupList: () => set({ isShowDefault: false, isShowFriendList: false, isShowGroupList: true, activeTab: 'groups' }),
    }),
    {
      name: 'sidebar-state', // name of the item in storage
    }
  )
);

export default useChangeSidebar;
