angular.module('Interactive.game.tapdance.game', [
    'ui.router',
    'ui.bootstrap',
    'Interactive.game.tapdance.result'
])

.config(function($stateProvider) {
    $stateProvider
        .state('game-tapdance-game', {
            url: '/tapdance-game',
            views: {
                'main': {
                    controller: 'gameCtrl',
                    templateUrl: 'game/tapdance/tapdance-game.tpl.html'
                }
            },

            data: { pageTitle: 'Tapdance Game' }
        }
    );
})

.controller( 'gameCtrl', function IndexController($scope) {
    $scope.start_button = {};
    $scope.game = false;

    $scope.start_button.click = function(event) {
        $scope.game = true;
    };
})

.directive('pixi', function($parse, $state) {
    return {
        restrict: 'A',
        scope: true,
        controller: function($scope, $element, $attrs, $document, $window) {
            // init the first element
            $element = $element[0];
            var game_div = document.getElementsByClassName('game-background')[0];

            var width = game_div.scrollWidth;
            var height = 660;

            console.log(width, height);

            // TODO: set color from options
            var stage = new PIXI.Stage();

            // create the root of the scene graph
            var renderer = PIXI.autoDetectRenderer(width, height,
                                                    {view: $element,
                                                    transparent: true});

            var bg_white = PIXI.Sprite.fromImage('/assets/jeans_bg_white.png');
            var jeans = PIXI.Sprite.fromImage('/assets/jeans_plane.png');
            var bg = PIXI.Sprite.fromImage('/assets/jeans_cutout.png');
            var water = PIXI.Sprite.fromImage('/assets/water.png');
            var loader = PIXI.Sprite.fromImage('/assets/loader.png');

            bg_white.width = renderer.width;
            bg_white.height = renderer.height;

            bg.width = renderer.width;
            bg.height = renderer.height;

            jeans.width = renderer.width;
            jeans.height = renderer.height;

            water.width = renderer.width;
            water.height = renderer.height;

            loader.y = 0;
            loader.x = 0;
            loader.height = 24;

            stage.addChild(bg_white);
            stage.addChild(jeans);

            stage.addChild(water);
            stage.addChild(bg);

            stage.addChild(bg_white);
            stage.addChild(loader);

            animate();

            function animate() {
                renderer.render(stage);
                requestAnimFrame(animate);

                if ($scope.game) {
                    water.position.y += 1;
                    loader.position.x += 0.5;

                    if (water.position.y > 520) {
                        $scope.$apply(function() {
                            $scope.game = false;
                            $state.go('game-tapdance-result');
                        });
                    }
                }
            }
        }
    };
})
;
        //var init = function(rendererType, transparent, antialias, element) {
        //    if (!stage) {
        //        // create a new instance of a pixi stage
        //        stage = new PIXI.Stage(0x66FF99);
        //        stageAttr.assign($scope, stage);
        //    }

        //    switch(rendererType) {
        //        case 'canvas':
        //            renderer = new PIXI.CanvasRenderer(width, height, $element, transparent);
        //        break;
        //        case 'webgl':
        //            try {
        //                renderer = new PIXI.WebGLRenderer(width, height, $element, transparent, antialias);
        //            } catch (e) {
        //                $scope.$emit('pixi.webgl.init.exception', e);
        //                return;
        //            }
        //        break;
        //        default:
        //            renderer = new PIXI.autoDetectRenderer(width, height, {view: $element}, transparent, antialias);
        //    }

        //    return renderer;
        //};

        //init(renderType, transparent, antialias, $element);

        //this.render = function render(force) {
        //    var doRender = true;
        //    if (renderFunc) {
        //        doRender = renderFunc(stage, this.renderer);
        //    }

        //    // render the stage
        //    if (force || doRender !== false) {
        //        this.renderer.render(stage);
        //    }
        //};

        //// create a texture from an image path
        //var texture = PIXI.Texture.fromImage("/assets/bunny.png");

        //// create a new Sprite using the texture
        //var bunny = new PIXI.Sprite(texture);

        //// center the sprites anchor point
        //bunny.anchor.x = 0.5;
        //bunny.anchor.y = 0.5;

        //// move the sprite t the center of the screen
        //bunny.position.x = width / 2;
        //bunny.position.y = height / 2;

        //function renderLoop() {
        //    self.render();
        //    bunny.rotation += 0.1;
        //    requestAnimFrame( renderLoop );
        //}

        //// add the renderer view element to the DOM
        ////document.body.appendChild(renderer.view);

        //this.getStage = function() {
        //    return stage;
        //};

        //this.getRenderer = function() {
        //    return this.renderer;
        //};

        //this.getContext = function() {
        //    return this.renderer.gl ? this.renderer.gl : this.renderer.context;
        //};

        //this.getStage().addChild(bunny);

        //requestAnimFrame( renderLoop );

        ////($window).resize(function() {
        ////    renderer.resize(element.width(), element.height());
        ////});

        //}
    //};
