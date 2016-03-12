/* Example */

/*
    AddSense.unit({
        container : ".view-banner",
        client : "ca-pub-xxxxxxxxxxxxxxxx",
        slot : "xxxxxxxxxx",
        width : 300,
        height : 250,
        overrideFormat : "true",
        pageUrl : "http://www.example.com"
    }).render();

 */

/* AddSense.js - Async AdSense banners via Javascript */
(function (window, document) {
    'use strict';

    var DISPLAY     = 'block',
        UNITS       = 'px',
        ADS_STATE   = 'google_persistent_state_async',
        CLASSNAME   = 'adsbygoogle',
        CLIENT      = 'data-ad-client',
        SLOT        = 'data-ad-slot',
        OVERRIDE    = 'data-override-format',
        PAGEURL     = 'data-page-url';

    /**
     * @constructor
     */
    var Unit = function(options) {

        function build(options) {
            var html  = document.createElement("ins");
                html.className = CLASSNAME;

                /* Styles */

                html.style.display = DISPLAY;
                html.style.width = options.width + UNITS;
                html.style.height = options.height + UNITS;

                /* Requierd Attributes */

                html.setAttribute(CLIENT, options.client);
                html.setAttribute(SLOT, options.slot);

                /* Optional Attributes */

                if (options.overrideFormat!==undefined)
                    html.setAttribute(OVERRIDE, options.overrideFormat);

                if (options.pageUrl!==undefined)
                    html.setAttribute(PAGEURL, options.pageUrl);
            
            return html;
        }
      
        /* Init */
        this.html = build(options);
        this.container = document.querySelectorAll(options.container)[0];
    }

    Unit.prototype = {
        constructor: Unit,

        render: function() {
            this.container.appendChild(this.html);

            (window.adsbygoogle = window.adsbygoogle || []).push({});
            
            delete(window[ADS_STATE]);
        }
    };

    /**
     * @constructor
     */
    var AddSense = function() {
        this.script = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        this.isScriptLoaded = false;
    };

    AddSense.prototype = {
        constructor: AddSense,

        loaded: function() {
            if (this.isScriptLoaded) 
                return this.isScriptLoaded;

            for (var i = 0; i < document.scripts.length; i++) {
                if(document.scripts[i].src === window.location.protocol+this.script) {
                    this.isScriptLoaded = true;
                }
            }

            return this.isScriptLoaded;
        },

        load: function() {

            var s = document.createElement('script');
                s.src = this.script;
            
            document.body.appendChild(s);
        },

        unit: function(options) {
            return new Unit(options);
        }
    }

    window.AddSense = new AddSense();

})(window, document);
