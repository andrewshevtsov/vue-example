var UsersTable = {
  template: '#users-table',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  filters: {
    toUppercase(value) {
      if (!value) return ''
      value = value.toString();
      return value.toUpperCase();
    }
  },
  data: function() {
    return {
      
    }
  },
  computed: {
    totalUsers: function() {
      return this.users.length;
    }
  },
  methods: {
    remove: function(id) {
      this.$emit('remove', id);
    }
  }
}
/* ============================================ */
const app = new Vue({
  el: '#app',
  components: {
    'users-table': UsersTable
  },
  data: function () {
    return {
      isListVisible: true,
      list: []
    }
  },
  computed: {
    defaultImage() {
      return 'https://via.placeholder.com/100';
    }
  },
  watch: {
    isListVisible: {
      immediate: true,
      handler: function() {
        console.log('скрыть/показать список', this.isListVisible);
      }
    }
  },
  mounted: function() {
    this.loadUsers();
  },
  methods: {
    removeFromList(id) {
      this.list = this.list.filter(function(item) {
        return item.id !== id
      });
    },
    toggleList() {
      this.isListVisible = !this.isListVisible;
    },
    loadUsers() {
      this.list = [
        {
          id: 0,
          firstName: 'Иван',
          lastName: 'Иванов',
          middleName: 'Иванович',
          avatarUrl: 'https://cdn.forbes.ru/files/presets/820_547/photo_galleries/m-1_vid341095e.jpg__1551363734__42795__vid372891e.jpg'
        },
        {
          id: 1,
          firstName: 'Петр',
          lastName: 'Петров',
          middleName: 'Петрович',
          avatarUrl: 'https://cdn.forbes.ru/files/presets/820_547/photo_galleries/m-3_vid341095e.jpg__1551363805__12018__vid372891e.jpg'
        },
        {
          id: 2,
          firstName: 'Василий',
          lastName: 'Васильев',
          middleName: 'Васильевич',
          avatarUrl: 'https://cdn.forbes.ru/files/presets/820_547/photo_galleries/m-6_vid341095e.jpg__1551363912__52491__vid372891e.jpg'
        },
        {
          id: 3,
          firstName: 'Владимир',
          lastName: 'Владимиров',
          middleName: "Владимирович",
          avatarUrl: 'https://cdn.forbes.ru/files/presets/820_547/photo_galleries/m-2_vid341095e.jpg__1551363998__99124__vid372891e.jpg'
        },
        {
          id: 4,
          firstName: 'Константин',
          lastName: 'Константинов',
          middleName: 'Константинович',
          avatarUrl: 'https://cdn.forbes.ru/files/presets/820_547/photo_galleries/eb2f39b2-2fce-4d6c-9003-3bc5ab196e86.jpeg__1551701427__73194__vid372891e.jpeg'
        }
      ];
    }
  }
});
