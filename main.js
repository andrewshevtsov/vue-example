const app = new Vue({
  el: '#app',
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
  filters: {
    toUppercase(value) {
      if (!value) return ''
      value = value.toString();
      return value.toUpperCase();
    }
  },
  mounted: function() {
    this.loadUsers();
  },
  methods: {
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
