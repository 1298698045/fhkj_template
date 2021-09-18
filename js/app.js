var mixin = {
    data: function(){
        return {
            isArticle: false,
            hasRoute: this.hasOwnProperty('$route'),
            selectMenu: ''
        }
    },
    computed: {
        activeMenu: function() {
            return (this.selectMenu || this.typePath)
        }
    },
    methods: {
        push: function(path) {
            router.push({path: path})
        },
        gotoHref: function(url) {
            location.href = url
        },
        goto: function(url) {
            window.open(url)
        },
        onMenuMouseOver: function(menu) {
            this.selectMenu = menu
        },
        onMenuMouseLeave: function() {
            this.selectMenu = ''
        }
    }
}
