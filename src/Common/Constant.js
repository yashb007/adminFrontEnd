module.exports = {
    getAPI: function () {
        // return "http://192.168.1.3/post@/ws";
        return "http://i-managed.biz/post@/web_services/ws";
    },
    defaultLanguage: function () {
        return 1;
    },
    DefaultLoadDataTable: function () {
        let script = document.createElement('script');
        script.src = process.env.PUBLIC_URL + "/assets/pages/data-table/extensions/key-table/js/key-table-custom.js";
        script.type = "text/javascript";
        document.head.append(script);
    }
    ,
    DefaultLoadFileUpload: function () {
        let script = document.createElement('script');
        script.src = process.env.PUBLIC_URL + "/assets/pages/jquery.filer/js/jquery.filer.min.js";
        script.type = "text/javascript";
        document.head.append(script);
    }

}
