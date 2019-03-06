/* ============================================ */



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
      test: 123,
      isListVisible: true
    }
  },
  computed: {
    abc: function() {
      return this.test + 4
    },
    totalUsers: function() {
      return this.users.length;
    }
  },
  methods: {
    remove: function(id) {
      console.log('component remove', id);
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
      title: 'Some title',
      isListVisible: true,
      computed: '',
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
      // deep: true,
      immediate: true,
      handler: function() {
        console.log('Чекаво жучара, кнопку нажимал?', this.isListVisible);
      }
    }
  },
  mounted: function() {
    this.loadUsers();
  },
  methods: {
    removeFromList(id) {
      console.log('parent remove', id);
      this.list = this.list.filter(function(item) {
        return item.id !== id
      });
    },
    totalUsers() {
      return this.list.length;
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
          avatarUrl: 'https://is.gd/DIyN1A'
        },
        {
          id: 1,
          firstName: 'Петр',
          lastName: 'Петров',
          middleName: 'Петрович',
          avatarUrl: 'https://is.gd/z7mVg1'
        },
        {
          id: 2,
          firstName: 'Василий',
          lastName: 'Васильев',
          middleName: 'Васильевич',
          avatarUrl: 'https://is.gd/hnpxjn'
        },
        {
          id: 3,
          firstName: 'Владимир',
          lastName: 'Владимиров',
          middleName: "Владимирович",
          avatarUrl: 'https://is.gd/pMvnpd'
        },
        {
          id: 4,
          firstName: 'Константин',
          lastName: 'Константинов',
          middleName: 'Константинович',
          avatarUrl: 'https://is.gd/Te58gx'
        }
      ];
    }
  }
});
