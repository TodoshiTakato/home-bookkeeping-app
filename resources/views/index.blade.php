<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>

        @if (env('APP_ENV') === 'production')
            <base href="/extjs/build/production/MyApp/"/>
        @elseif(env('APP_ENV') === 'testing')
            <base href="/extjs/build/testing/MyApp/"/>
        @elseif (env('APP_ENV') === 'local')
            <base href="/extjs/"/>
        @endif

{{--        <script id="microloader"--}}
{{--                data-app="c4dd9033-96b9-4a7e-bdb3-b6dce5cec380"--}}
{{--                type="text/javascript"--}}
{{--                src="{{ asset('bootstrap.js') }}">--}}
{{--        </script>--}}

        @if (env('APP_ENV') === 'production')
            <script id="microloader" type="text/javascript" src="{{ asset('extjs/microloader.js') }}" data-app="c4dd9033-96b9-4a7e-bdb3-b6dce5cec380"></script>
        @elseif (env('APP_ENV') === 'testing')
            <script id="microloader" type="text/javascript" src="{{ asset('extjs/microloader.js') }}" data-app="c4dd9033-96b9-4a7e-bdb3-b6dce5cec380"></script>
        @elseif (env('APP_ENV') === 'local')
{{--            <script id="microloader" type="text/javascript" src="{{ asset('extjs/bootstrap.js') }}" data-app="c4dd9033-96b9-4a7e-bdb3-b6dce5cec380"></script>--}}
{{--        @endif--}}
        <!-- The line below must be kept intact for Sencha Cmd to build your application -->
            <script id="microloader" type="text/javascript"  src="{{ asset('extjs/bootstrap.js') }}" data-app="c4dd9033-96b9-4a7e-bdb3-b6dce5cec380"></script>
        @endif

        <script type="text/javascript">
            var Ext = Ext || {}; // Ext namespace won't be defined yet...

            // This function is called by the Microloader after it has performed basic
            // device detection. The results are provided in the "tags" object. You can
            // use these tags here or even add custom tags. These can be used by platform
            // filters in your manifest or by platformConfig expressions in your app.
            //
            Ext.beforeLoad = function (tags) {
                var s = location.search,  // the query string (ex "?foo=1&bar")
                    profile;

                // For testing look for "?classic" or "?modern" in the URL to override
                // device detection default.
                //
                if (s.match(/\bclassic\b/)) {
                    profile = 'classic';
                }
                else if (s.match(/\bmodern\b/)) {
                    profile = 'modern';
                }
                else {
                    profile = tags.desktop ? 'classic' : 'modern';
                    //profile = tags.phone ? 'modern' : 'classic';
                }

                Ext.manifest = profile; // this name must match a build profile name

                // This function is called once the manifest is available but before
                // any data is pulled from it.
                //
                //return function (manifest) {
                // peek at / modify the manifest object
                //};
            };
        </script>



    </head>
    <body>

    </body>
</html>
