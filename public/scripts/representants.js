new Vue({
  el: '#app',
  data: () => ({
    pagination: {
      sortBy: 'ville' },

    selected: [],
    search: '',
    isMobile: false,
    headers: [{
      text: 'Villes (Indication)',
      align: 'left',
      value: 'ville' },

    {
      text: 'Représentants',
      value: 'representants' },

    {
      text: 'Contacts',
      value: 'contacts' }],


    villes: [{
      value: false,
      ville: 'Yaoundé (Emana)',
      representants: "Ngono Barbara",
      contacts: 651625176},

    {
      value: false,
      ville: 'Yaoundé (Essos)',
      representants: "Mani Michel",
      contacts: 655601362},

    {
      value: false,
      ville: 'Yaoundé (Biyem-Assi)',
      representants: "Kamga Yvan",
      contacts: 682095349},

    {
      value: false,
      ville: 'Yaoundé (Mimboman)',
      representants: "Dani space's",
      contacts: 657546726},

    {
      value: false,
      ville: 'Douala (Kotto)',
      representants: "Andréa",
      contacts: 650437172},

    {
      value: false,
      ville: 'Douala (Bessengue)',
      representants: "Néhemie",
      contacts: 690483337},

    {
      value: false,
      ville: 'Douala (Nyalla)',
      representants: "Doriane",
      contacts: 652673305},

    {
      value: false,
      ville: 'Douala (Bali)',
      representants: "M&B HOME BEAUTY",
      contacts: 690341170},

    {
      value: false,
      ville: 'Douala (Logbaba)',
      representants: "INSTITUT DE BEAUTÉ BELLE IMAGE",
      contacts: 690481428},

    {
      value: false,
      ville: 'Edea',
      representants: "Berthe",
      contacts: 690404297},

      {
        value: false,
        ville: 'Edea',
        representants: "Audrey",
        contacts: 699395322},

        {
          value: false,
          ville: 'Ngaoundere',
          representants: "Ben Abdel Aziz ",
          contacts: 674080943},

          {
            value: false,
            ville: 'Ngaoundere',
            representants: "Arthur",
            contacts: 694986775},

            {
              value: false,
              ville: 'Gabon',
              representants: "Stanislas",
              contacts: +24102703153},

              {
                value: false,
                ville: 'Bertoua',
                representants: "Marie",
                contacts: 650449655 },

                {
                  value: false,
                  ville: 'Nsangmelima',
                  representants: "Beleza",
                  contacts: 673203012},

                  {
                    value: false,
                    ville: 'Tchad',
                    representants: "Fatime Ndodi",
                    contacts: +23565401965},

                    {
                      value: false,
                      ville: 'Limbe',
                      representants: "Patrice",
                      contacts: 674257243},

                        {
                          value: false,
                          ville: 'Bafoussam',
                          representants: "Teukoua Caleb",
                          contacts: 699147331}
                    
    ] }),




  methods: {
    onResize() {
      if (window.innerWidth < 769)
      this.isMobile = true;else

      this.isMobile = false;
    },
    toggleAll() {
      if (this.selected.length) this.selected = [];else
      this.selected = this.desserts.slice();
    },
    changeSort(column) {
      console.log(column);
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    } } });