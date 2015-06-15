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

.controller( 'gameCtrl', function IndexController($scope, game) {
    $scope.start_button = {};

    $scope.game = false;
    $scope.trial = false;
    $scope.play = false;

    // show trail screen if not played yet.
    if (game.played === 0) {
        $scope.trial = true;
    } else if(game.played === 1) {
        $scope.trial = false;
        $scope.play = true;
    }

    $scope.start_button.click = function(event) {
        $scope.game = true;
        $scope.trial = false;
        $scope.play = false;
        $scope.start_time = Date.now();
    };
})

.directive('pixi', function($parse, $state, game) {
    return {
        restrict: 'A',
        scope: true,
        controller: function($scope, $element, $attrs, $document, $window) {
            var stage = new PIXI.Container();
            var graphics = new PIXI.Graphics();

            var stage_objects = {
                bg_white: PIXI.Sprite.fromImage('/assets/jeans_bg_white.png'),
                jeans: PIXI.Sprite.fromImage('/assets/jeans_plane.png'),
                bg: PIXI.Sprite.fromImage('/assets/jeans_cutout.png'),
                water: PIXI.Sprite.fromImage('/assets/water.png'),
                loader: PIXI.Sprite.fromImage('/assets/loader.png')
            };

            var init = function(stage, width, height, stage_objects) {
                // create the root of the scene graph
                var renderer = PIXI.autoDetectRenderer(width, height,
                                    {view: $element, transparent: true});

                for (var key in stage_objects ) {
                    stage_objects[key].width = renderer.width;
                    stage_objects[key].height = renderer.height;
                }

                stage_objects.loader.y = 0;
                stage_objects.loader.x = 0;
                stage_objects.loader.height = 21;
                //stage_objects.water.y = renderer.height / 2;

                stage.addChild(stage_objects.bg_white);
                stage.addChild(stage_objects.jeans);

                stage.addChild(stage_objects.water);
                stage_objects.bg.interactive = true;

                stage.addChild(stage_objects.bg);

                stage.addChild(stage_objects.bg_white);
                stage.addChild(stage_objects.loader);

                return renderer;
            };

            var animate = function()  {
                if ($scope.game) {
                    stage_objects.water.position.y -= 0.2;
                    stage_objects.loader.position.x += 0.55;

                    if((Date.now() - $scope.start_time) > 10000 ) {
                        $scope.game = false;
                        $scope.$apply();

                        if (game.played === 0) {
                            game.played += 1;

                            setTimeout(function(){
                                $state.go($state.current, {}, { reload: true
                                });
                            }, 10);
                        } else {
                            $state.go('game-tapdance-result');
                        }
                    }
                }

                renderer.render(stage);
                setTimeout(function(){ requestAnimationFrame(animate); }, 10);

            };

            $element = $element[0];
            var game_div = document.getElementsByClassName('container')[0];

            var width = game_div.scrollWidth;
            var height = 569;

            renderer = init(stage, width, height, stage_objects);
            graphics.beginFill();

            // set the line style to have a width of 5 and set the color to red
            graphics.fillAlpha = 0;

            // draw a rectangle
            graphics.drawRect(35, height - 150, 250, 100);
            graphics.interactive = true;

            var buttonsClick = function(event) {
                var inc = stage_objects.water.position <= 0 ? 0 : 5;
                stage_objects.water.position.y += inc;
                game.clicks += 2;
            };

            graphics.on('mousedown', buttonsClick);
            graphics.on('touchstart', buttonsClick);

            stage.addChild(graphics);

            animate();
        }
    };
})

.factory('game', function() {
    return {
        played: 0,
        clicks: 0
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
