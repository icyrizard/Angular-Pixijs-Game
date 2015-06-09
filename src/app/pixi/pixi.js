angular.module('Interactive.pixi', [
])

.directive('pixi', function($parse) {
  return {
    restrict: 'A',
    scope: true,
    controller: function($scope, $element, $attrs, $document) {
            // init the first element
            $element = $element[0];

            var width = $element.width || 800;
            var height = $element.height || 400;

            // TODO: set color from options
            var stage = new PIXI.Stage();
            var renderer = PIXI.autoDetectRenderer(width, height,
                                                   {view: $element});

            renderer.view.style.height = window.innerHeight;
            renderer.view.style.width = window.innerWidth;
            renderer.view.style.display = 'block';

            var bg_texture = PIXI.Texture.fromImage('/assets/images/mario_bg.png');
            var bg = new PIXI.TilingSprite(bg_texture, width, height - 20);

            bg.position.x = 0;
            bg.position.y = 0;

            bg.tilePosition.x = 0;
            bg.tilePosition.y = 0;

            //, TODO calculate scaling
            stage.addChild(bg);
            requestAnimFrame(animate);

            function animate() {
                bg.tilePosition.x -= 0.5;
                requestAnimFrame(animate);
                renderer.render(stage);
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
