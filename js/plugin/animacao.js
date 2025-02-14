export default function initPlugin() {
  var t,
    e = {
      624: (t, e, i) => {
        var n = i(880);
        let o = null;
        class r {
          constructor() {
            (this.updateFunctions = []),
              (this.updateFunctionsLength = 0),
              (o = this),
              this.init();
          }
          static getInstance() {
            return o || (o = new r()), o;
          }
          static add(t) {
            r.getInstance().add(t);
          }

          init() {
            (this.lastUpdateTime = 0.001 * performance.now()),
              (this.animFunction = this.update.bind(this)),
              requestAnimationFrame(this.animFunction);
          }
          add(t) {
            this.updateFunctions.push(t),
              (this.updateFunctionsLength = this.updateFunctions.length);
          }
          update(t) {
            requestAnimationFrame(this.animFunction);
            const e = (t *= 0.001) - this.lastUpdateTime,
              i = Math.max(Math.min(e / this.baseDeltaTime, 2), 0.5); //velocidade da animação mouseMove
            let n;
            for (let s = 0; s < this.updateFunctionsLength; s++)
              (n = this.updateFunctions[s]),
                n({ time: t, deltaTime: e, timeScale: i });
            this.lastUpdateTime = t;
          }
        }
        class h {
          constructor() {
            (this.prevSize = { w: 0, h: 0 }),
              (this.checkTime = 0),
              (this.interval = 500),
              (this.getSize = null);
          }
          reset() {
            (this.prevSize = { w: 0, h: 0 }), (this.checkTime = 0);
          }
          setSizeFunc(t) {
            (this.getSize = t), this.reset();
          }
          check() {
            const t = performance.now();
            if (t - this.checkTime < this.interval) return !1;
            this.checkTime = t;
            const { width: e, height: i } = this.getSize();
            return (
              (e !== this.prevSize.w || i !== this.prevSize.h) &&
              ((this.prevSize.w = e), (this.prevSize.h = i), !0)
            );
          }
        }
        class a {
          constructor(t) {
            (this.functions = []),
              (this.numFunctions = 0),
              (this.mq = window.matchMedia(t)),
              this.mq.addEventListener(
                "change",
                this.onMediaQueryChange.bind(this)
              );
          }
          add(t) {
            this.functions.push(t), (this.numFunctions = this.functions.length);
          }

          onMediaQueryChange() {
            for (let t = 0; t < this.numFunctions; t++)
              (0, this.functions[t])(this.mq.matches);
          }
        }
        var c = i(705);
        let l = null;
        class u {
          constructor() {
            if (l) return l;
            (this.onWheelAvailable = "onwheel" in document),
              (this.onKeydownAvailable = "onkeydown" in document),
              (this.onTouchAvailable = "ontouchstart" in document),
              (this.onContextmenuAvailable = "oncontextmenu" in document),
              (this.events = {
                pointerdown: this.onTouchAvailable
                  ? "touchstart"
                  : "pointerdown",
                pointermove: this.onTouchAvailable
                  ? "touchmove"
                  : "pointermove",
                pointerup: this.onTouchAvailable ? "touchend" : "pointerup",
              }),
              (l = this);
          }
          static getInstance() {
            return l || (l = new u()), l;
          }
          static get onWheelAvailable() {
            return u.getInstance().onWheelAvailable;
          }
          static get onKeydownAvailable() {
            return u.getInstance().onKeydownAvailable;
          }
          static get onTouchAvailable() {
            return u.getInstance().onTouchAvailable;
          }
          static get isTouch() {
            return u.getInstance().onTouchAvailable;
          }
          static get onContextmenuAvailable() {
            return u.getInstance().onContextmenuAvailable;
          }
          static get pointerdownEvent() {
            return u.getInstance().events.pointerdown;
          }
          static get pointermoveEvent() {
            return u.getInstance().events.pointermove;
          }
          static get pointerupEvent() {
            return u.getInstance().events.pointerup;
          }
        }
        class d {
          static random(t, e) {
            return void 0 === t
              ? Math.random()
              : void 0 === e
              ? Math.random() * t
              : t + Math.random() * (e - t);
          }
          static randomInt(t, e) {
            return Math.floor(d.random(t, e));
          }
          static constrain(t, e, i) {
            return Math.max(Math.min(t, i), e);
          }
          static map(t, e, i, n, s) {
            return ((t - e) / (i - e)) * (s - n) + n;
          }
          static radians(t) {
            return t * ((2 * Math.PI) / 360);
          }
          static dist(t, e, i, n) {
            return Math.sqrt((t - i) * (t - i) + (e - n) * (e - n));
          }
          static lerp(t, e, i) {
            return t + (e - t) * i;
          }
          static calcViewportFov(t, e) {
            return 2 * Math.atan(t / e) * (180 / Math.PI);
          }
        }
        class g {
          constructor(t, e) {
            (this.x = t), (this.velocity = 0), (this.omega = e);
          }
          update(t, e) {
            const i = e,
              n = this.velocity - (this.x - t) * (this.omega * this.omega * i),
              s = 1 + this.omega * i;
            (this.velocity = n / (s * s)), (this.x += this.velocity * i);
          }
          reset() {
            (this.x = 0), (this.velocity = 0);
          }
        }
        class p {
          constructor({ x: t, y: e }, i) {
            (this.position = { x: t, y: e }),
              (this.velocity = { x: 0, y: 0 }),
              (this.omega = i),
              (this.direction = 0);
          }
          update(t, e) {
            const i = e,
              n =
                this.velocity.x -
                (this.position.x - t.x) * (this.omega * this.omega * i),
              s =
                this.velocity.y -
                (this.position.y - t.y) * (this.omega * this.omega * i),
              o = 1 + this.omega * i;
            (this.velocity.x = n / (o * o)),
              (this.velocity.y = s / (o * o)),
              (this.position.x += this.velocity.x * i),
              (this.position.y += this.velocity.y * i);
          }
          calcDirection(t) {
            this.direction = Math.atan2(
              this.position.y - t.y,
              this.position.x - t.x
            );
          }
          reset() {
            (this.position.x = 0),
              (this.position.y = 0),
              (this.velocity.x = 0),
              (this.velocity.y = 0),
              (this.direction = 0);
          }
          set x(t) {
            this.position.x = t;
          }
          set y(t) {
            this.position.y = t;
          }
          get x() {
            return this.position.x;
          }
          get y() {
            return this.position.y;
          }
        } //pixels
        class v {
          constructor(t, e = { strictArea: !1, useTouch: !1 }) {
            (this.strictArea = e.strictArea),
              (this.useTouch = e.useTouch),
              (this.$area = null),
              (this.$target = null),
              (this.direction = t),
              (this.downPos = 0),
              (this.prevPos = 0),
              (this.targetPosition = 0),
              (this.position = 0),
              (this.velocity = 0),
              (this.acceleration = 0),
              (this.k = 0.4),
              (this.max = 0),
              (this.progress = 0),
              (this.isPointerDown = !1),
              (this.isDragging = !1),
              (this.isAutoScrolling = !1),
              (this.tween = new g(0, 30)),
              (this.onWheelFunction = this.onWheel.bind(this)),
              (this.onKeyDownFunction = this.onKeyDown.bind(this)),
              (this.onDownFunction = this.onDown.bind(this)),
              (this.onMoveFunction = this.onMove.bind(this)),
              (this.onUpFunction = this.onUp.bind(this)),
              (this.onContextMenuFunc = this.onContextMenu.bind(this)),
              (this.listenerOption = { capture: !0, passive: !1 }),
              (this.canceller = () => !1),
              (this.resizeMng = new h());
          }
          setTarget(t) {
            this.removeEvents(),
              (this.$area = t),
              (this.$target = this.$area.querySelector(
                '[data-scroll="target"]'
              )),
              this.setEvents(),
              this.reset(),
              this.resizeMng.setSizeFunc(() => {
                const { width: t, height: e } =
                  this.$target.getBoundingClientRect();
                return {
                  width: t + window.innerWidth,
                  height: e + window.innerHeight,
                };
              });
          }
          setCanceller(t) {
            this.canceller = t;
          }
          setEvents() {
            if (!this.$target) return;
            const t = this.strictArea ? this.$area : window;
            u.onWheelAvailable &&
              t.addEventListener(
                "wheel",
                this.onWheelFunction,
                this.listenerOption
              ),
              !this.strictArea &&
                u.onKeydownAvailable &&
                window.addEventListener("keydown", this.onKeyDownFunction),
              (u.isTouch || this.useTouch) &&
                (this.$area.addEventListener(
                  u.pointerdownEvent,
                  this.onDownFunction,
                  this.listenerOption
                ),
                this.$area.addEventListener(
                  u.pointermoveEvent,
                  this.onMoveFunction,
                  this.listenerOption
                ),
                this.$area.addEventListener(
                  u.pointerupEvent,
                  this.onUpFunction,
                  this.listenerOption
                )),
              u.onContextmenuAvailable &&
                window.addEventListener("contextmenu", this.onContextMenuFunc);
          }
          removeEvents() {
            if (!this.$target) return;
            const t = this.strictArea ? this.$area : window;
            u.onWheelAvailable &&
              t.removeEventListener(
                "wheel",
                this.onWheelFunction,
                this.listenerOption
              ),
              !this.strictArea &&
                u.onKeydownAvailable &&
                window.removeEventListener("keydown", this.onKeyDownFunction),
              (u.isTouch || this.useTouch) &&
                (this.$area.removeEventListener(
                  u.pointerdownEvent,
                  this.onDownFunction,
                  this.listenerOption
                ),
                this.$area.removeEventListener(
                  u.pointermoveEvent,
                  this.onMoveFunction,
                  this.listenerOption
                ),
                this.$area.removeEventListener(
                  u.pointerupEvent,
                  this.onUpFunction,
                  this.listenerOption
                )),
              u.onContextmenuAvailable &&
                window.removeEventListener(
                  "contextmenu",
                  this.onContextMenuFunc
                );
          }
          getDownX(t) {
            return u.isTouch ? t.changedTouches[0].pageX : t.pageX;
          }
          getDownY(t) {
            return u.isTouch ? t.changedTouches[0].pageY : t.pageY;
          }
          getDownPos(t) {
            return "vertical" === this.direction
              ? this.getDownY(t)
              : this.getDownX(t);
          }
          onWheel(t) {
            if (this.canceller()) return;
            t.preventDefault();
            let e = 0;
            e =
              "horizontal" === this.direction
                ? Math.abs(t.deltaY) >= Math.abs(t.deltaX)
                  ? t.deltaY
                  : t.deltaX
                : t.deltaY;
            const i = e;
            this.addTargetPosition(i);
          }
          onKeyDown(t) {
            if (this.canceller()) return;
            const e = t.code;
            "ArrowUp" === e
              ? this.addTargetPosition(-500)
              : "ArrowDown" === e && this.addTargetPosition(500);
          }
          onDown(t) {
            if (this.canceller()) return;
            this.isPointerDown = !0;
            const e = this.getDownPos(t);
            (this.downPos = e), (this.prevPos = e), (this.velocity = 0);
          }
          onMove(t) {
            if (this.canceller()) return;
            if (!this.isPointerDown) return;
            t.preventDefault();
            const e = this.getDownPos(t);
            (this.prevPos = this.downPos), (this.downPos = e);
            const i = this.prevPos - this.downPos;
            this.addTargetPosition(i), (this.isDragging = !0);
          }
          onUp() {
            this.canceller() ||
              (this.isPointerDown &&
                ((this.acceleration =
                  -this.k * (this.position - this.targetPosition)),
                (this.downPos = 0),
                (this.prevPos = 0),
                (this.isPointerDown = !1),
                (this.isDragging = !1)));
          }
          onContextMenu() {
            this.isPointerDown = !1;
          }
          addTargetPosition(t) {
            this.targetPosition = d.constrain(
              this.targetPosition + t,
              0,
              this.max
            );
          }
          changeDirection(t) {
            this.direction !== t && (this.reset(), (this.direction = t));
          }
          resize() {
            if (this.$target)
              if ("vertical" === this.direction) {
                const { height: t } = this.$target.getBoundingClientRect(),
                  { height: e } =
                    this.$target.parentNode.getBoundingClientRect();
                this.max = Math.floor(t - e);
              } else {
                const { width: t } = this.$target.getBoundingClientRect(),
                  { width: e } =
                    this.$target.parentNode.getBoundingClientRect();
                this.max = Math.floor(t - e);
              }
          }
          update(t) {
            this.canceller() ||
              (this.resizeMng.check() && this.resize(),
              (this.velocity += this.acceleration),
              (this.targetPosition += this.velocity),
              (this.velocity *= 0.9),
              (this.acceleration = 0),
              (this.targetPosition = d.constrain(
                this.targetPosition,
                0,
                this.max
              )),
              this.tween.update(this.targetPosition, t),
              Math.abs(this.tween.velocity) < 0.01 &&
                (this.tween.x = this.targetPosition),
              this.isAutoScrolling && (this.tween.x = this.targetPosition),
              (this.position = this.tween.x),
              this.max > 0
                ? (this.progress = d.constrain(this.position / this.max, 0, 1))
                : (this.progress = 0),
              this.progress < 1e-4 && (this.progress = 0),
              "vertical" === this.direction
                ? (this.$target.style.transform = `translate3d(0, ${-this
                    .position}px, 0)`)
                : (this.$target.style.transform = `translate3d(${-this
                    .position}px, 0, 0)`));
          }
          reset() {
            (this.targetPosition = 0),
              (this.position = 0),
              (this.velocity = 0),
              (this.acceleration = 0),
              (this.max = 0),
              (this.progress = 0),
              this.tween.reset();
          }
          setPosition(t) {
            (this.targetPosition = t), (this.position = t), (this.tween.x = t);
          }
          scrollTo(t, e = 1) {
            (this.isAutoScrolling = !0),
              n.os.to(this, {
                targetPosition: t,
                duration: e,
                onComplete: () => {
                  this.isAutoScrolling = !1;
                },
              });
          }
          scrollBy(t, e = 1) {
            (this.isAutoScrolling = !0),
              n.os.to(this, {
                targetPosition: this.targetPosition + t,
                duration: e,
                onComplete: () => {
                  this.isAutoScrolling = !1;
                },
              });
          }
        }
        var m = i(528),
          w = i(235),
          x = i(189),
          y = i(720),
          f = i(471);
        const b = {
          width: 100,
          height: 100,
          halfWidth: 50,
          halfHeight: 50,
          cameraZ: 500,
          dpr: 1,
          aspectRatio: 1,
        };
        class S {
          constructor() {
            (this.container = document.querySelector("#Background")),
              this.setConfig(),
              (this.offScene = new w.Z()),
              (this.scene = new w.Z()),
              (this.camera = new x.q(
                0.5 * -b.sceneWidth,
                0.5 * b.sceneWidth,
                0.5 * b.sceneHeight,
                0.5 * -b.sceneHeight,
                0.1,
                1e4
              )),
              this.camera.position.set(0, 0, 10),
              (this.renderer = new y.J({
                canvas: this.container.querySelector("canvas"),
                alpha: !1,
                antialias: !1,
              })),
              this.renderer.setSize(b.width, b.height),
              this.renderer.setPixelRatio(b.dpr),
              this.renderer.setClearColor(0, 0),
              this.renderer.clear(),
              (this.renderTarget = new f.n(100, 100)),
              (this.renderTarget.samples = 8);
          }
          setConfig() {
            const { width: t, height: e } =
              this.container.getBoundingClientRect();
            (b.dpr = Math.min(window.devicePixelRatio, 2)),
              (b.width = t),
              (b.height = e),
              (b.halfWidth = b.width / 2),
              (b.halfHeight = b.height / 2),
              (b.aspectRatio = b.width / b.height),
              (b.sceneWidth = 2),
              (b.sceneHeight = 2 / b.aspectRatio);
          }
          resizeScene() {
            (this.camera.left = 0.5 * -b.sceneWidth),
              (this.camera.right = 0.5 * b.sceneWidth),
              (this.camera.top = 0.5 * b.sceneHeight),
              (this.camera.bottom = 0.5 * -b.sceneHeight),
              (this.camera.aspect = b.aspectRatio),
              this.camera.updateProjectionMatrix(),
              this.renderer.setSize(b.width, b.height),
              this.renderTarget.setSize(b.width * b.dpr, b.height * b.dpr);
          }
        }
        var T = i(822),
          M = i(712),
          P = i(898),
          C = i(818),
          $ = i.n(C),
          F = i(293),
          D = i.n(F);
        class z extends T.e {
          constructor(t) {
            super(),
              (this.width = 2),
              (this.height = 2 / (1238 / 2456)), // DIMENSÕES BACKGROUND
              (this.geometry = new M.b(this.width, this.height)),
              (this.material = new P.D({
                uniforms: {
                  texture: { value: t },
                  time: { value: 0 },
                  seed: { value: Math.floor(1e3 * Math.random()) },
                },
                vertexShader: $(),
                fragmentShader: D(),
                transparent: !0,
              }));
          } //dimensões background
          resize() {}
          scroll(t) {
            const e =
              -(0.5 * this.height - 0.5 * b.sceneHeight) +
              t * (this.height - b.sceneHeight);
            this.position.y = e;
          }
          update(t) {
            this.material.uniforms.time.value = t;
          }
        } //height e width
        var A = i(477),
          E = i(128),
          R = i(627);
        let L = null;
        class k {
          constructor() {
            if (L) return L;
            (this.px = 0), (this.py = 0), (L = this), this.init();
          }
          static getInstance() {
            return L || (L = new k()), L;
          }
          static get x() {
            return k.getInstance().px;
          }
          static get y() {
            return k.getInstance().py;
          }
          init() {
            document.addEventListener(
              "pointermove",
              this.onPointerMove.bind(this)
            );
          }
          onPointerMove(t) {
            (this.px = t.clientX), (this.py = t.clientY);
          }
        }
        var I = i(561),
          W = i.n(I),
          q = i(734),
          O = i.n(q);
        class H extends T.e {
          constructor({ texture: t }) {
            super(),
              (this.isReady = !1),
              (this.canvas = document.createElement("canvas")),
              (this.canvas.width = b.width * b.dpr),
              (this.canvas.height = this.canvas.width / b.aspectRatio),
              (this.ctx = this.canvas.getContext("2d", { alpha: !0 })),
              (this.noise2d = (0, R.fu)()),
              (this.nd = 0.03 * b.dpr),
              (this.pTween = new p({ x: k.x, y: k.y }, 15));
            const e = 2 / b.aspectRatio;
            (this.geometry = new M.b(2, e)),
              (this.material = new P.D({
                uniforms: {
                  texture: { value: t },
                  canvasTexture: { value: null },
                  time: { value: 0 },
                  shiftSize: { value: 0 },
                },
                vertexShader: W(),
                fragmentShader: O(),
                transparent: !0,
              }));
          }
          resize() {
            //CELULAS tamanho etc.
            const t = 2 / b.aspectRatio;
            (this.geometry = new M.b(2, t)), //distorção canvas
              (this.canvas.width = b.width * b.dpr),
              (this.canvas.height = b.height * b.dpr),
              (this.cellSize = 40 * b.dpr), //tamanho celulas
              (this.halfCellSize = 0.5 * this.cellSize),
              (this.numXCells = Math.ceil(this.canvas.width / this.cellSize)),
              (this.numYCells = Math.ceil(this.canvas.height / this.cellSize)),
              (this.cellData = []);
            for (let t = 0; t <= this.numXCells; t++)
              for (let e = 0; e <= this.numYCells; e++)
                this.cellData.push({
                  x: t * this.cellSize - this.halfCellSize,
                  y: e * this.cellSize - this.halfCellSize,
                  tween: new g(0, 45),
                  isActive: !1,
                });
            (this.numCells = this.cellData.length),
              (this.radius = 0.075 * this.canvas.width), //numero de celulas
              (this.nd = 0.05 * b.dpr), //frequencia das celulas
              (this.material.uniforms.shiftSize.value = 1 / this.numXCells),
              this.canvasTexture && this.canvasTexture.dispose(),
              (this.canvasTexture = new A.G(this.canvas)),
              (this.canvasTexture.minFilter = E.k6q),
              (this.canvasTexture.magFilter = E.k6q),
              (this.canvasTexture.generateMipmaps = !1),
              (this.material.uniforms.canvasTexture.value = this.canvasTexture),
              this.material.needsUpdate,
              (this.isReady = !0);
          } //TAMAHO DAS CELULAS
          update({ time: t, deltaTime: e }) {
            if (!this.isReady) return;
            if (u.isTouch) return;
            const i = window.innerWidth < 960 ? 10 : 60,
              n = k.x * b.dpr - i * b.dpr,
              s = k.y * b.dpr;
            this.pTween.update({ x: n, y: s }, e),
              this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height),
              (this.ctx.strokeStyle = "#0000ff"); //borda cor
            for (let i = 0; i < this.numCells; i++) {
              const n = this.cellData[i],
                s = this.noise2d(n.x * this.nd, n.y * this.nd + 0.4 * t); //frequencia de novas celulas
              if (
                d.dist(this.pTween.x, this.pTween.y, n.x, n.y) +
                  150 * s * b.dpr <=
                this.radius //raio de nascimento das novas
              ) {
                n.isActive || ((n.tween.x = 1), (n.isActive = !0)),
                  n.tween.update(0, e);
                const t = 0.5 * (1 + s),
                  i = n.x - this.halfCellSize,
                  o = n.y - this.halfCellSize;
                (this.ctx.fillStyle = `rgba(255, ${255 * n.tween.x}, 0, 0.1`), //cor das celulas
                  this.ctx.fillRect(i, o, this.cellSize, this.cellSize),
                  this.ctx.strokeRect(i, o, this.cellSize, this.cellSize);
              } else n.isActive = !1;
            }
            (this.canvasTexture.needsUpdate = !0),
              (this.material.uniforms.time.value = t);
          } //tamanho do Canvas, alterações em celulas (cor)
        } //alterações nas celulas e canva
        const U = new (class extends S {
            constructor() {
              super(), (this.isSceneReady = !1);
            }
            async init() {
              const t = new m.T(),
                e = [t.loadAsync("/img/bg.png"), t.loadAsync("/img/bg.png")],
                i = await Promise.all(e);
              (this.background = new z(i[0])),
                (this.character = new z(i[1])),
                this.offScene.add(this.background),
                this.offScene.add(this.character),
                (this.scenePlane = new H({
                  texture: this.renderTarget.texture,
                })),
                this.scene.add(this.scenePlane),
                (this.isSceneReady = !0),
                (this.isVisible = !0),
                this.resize();
            } //background imagem
            resize() {
              this.isSceneReady &&
                (this.setConfig(),
                this.resizeScene(),
                this.background.resize(),
                this.character.resize(),
                this.scenePlane.resize());
            }
            scroll(t) {
              this.isSceneReady &&
                (this.background.scroll(t),
                this.character.scroll(0.1 + 0.85 * t)); //posição do bg height
            } //posição do bg
            update(t) {
              this.isSceneReady &&
                (this.background.update(),
                this.character.update(),
                this.scenePlane.update(t),
                this.renderer.setRenderTarget(this.renderTarget),
                this.renderer.render(this.offScene, this.camera),
                this.renderer.setRenderTarget(null),
                this.renderer.render(this.scene, this.camera));
            }
          })(), //bg imagem height
          B = {
            init() {
              (this.$pageWrapper = document.getElementById("PageWrapper")),
                (this.scroll = new v("vertical", { strictArea: !0 })),
                this.scroll.setTarget(this.$pageWrapper),
                U.init();
            },
            update(t, e) {
              this.scroll.update(t.deltaTime), this.scroll.scroll;
              const i = this.scroll.progress;
              n.os.set(document.documentElement, { "--scroll-progress": i });
              (o = d.constrain(-s / window.innerHeight, 0, 1)), (h = r + 10);
              let c = 0;
              a <= window.innerHeight && (c = -(a - window.innerHeight)),
                U.scroll(i),
                U.update(t);
            },
            resize() {
              U.resize();
            },
            onMqChange(t) {},
          }; //objeto com a seleção dos itens relevantes para o script rodar
        class Y {}
        const _ = new (class {
          constructor() {}
          async init() {
            (window.Alpine = c.A),
              c.A.store("ui", B),
              c.A.start(),
              (this.loading = new Y()),
              (this.mq640 = new a("(min-width: 640px)")),
              this.mq640.add(this.onMqChange.bind(this)),
              this.onMqChange(this.mq640.matches),
              (this.resizeMng = new h()),
              this.resizeMng.setSizeFunc(() => ({
                width: window.innerWidth,
                height: window.innerHeight,
              })),
              this.resize(),
              r.add(this.update.bind(this));
          }
          onMqChange(t) {
            c.A.store("ui").onMqChange(t);
          }
          resize() {
            const t = document.documentElement,
              e = 0.01 * t.clientWidth,
              i = 0.01 * t.clientHeight;
            document.documentElement.style.setProperty("--vw", `${e}px`),
              document.documentElement.style.setProperty("--vh", `${i}px`),
              document.documentElement.style.setProperty(
                "--vmax",
                `${Math.max(e, i)}px`
              ),
              document.documentElement.style.setProperty(
                "--vmin",
                `${Math.min(e, i)}px`
              );
            const n = window.innerWidth < 960 ? 10 : 60,
              s = window.innerWidth < 960 ? 5 : 10,
              o = (t.clientWidth - 2 * n - 3 * s) / 4;
            c.A.store("ui").resize();
          }
          update(t) {
            this.resizeMng.check() && this.resize(),
              c.A.store("ui").update(t, this.mq640.matches);
          }
        })();
        document.addEventListener("DOMContentLoaded", () => {
          _.init();
        });
      },
      293: (t) => {
        t.exports =
          "precision highp float;\n\nuniform sampler2D texture;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 uv = vUv;\n\n  vec4 color = texture2D(texture, uv);\n  gl_FragColor = color;\n}\n";
      },
      818: (t) => {
        t.exports =
          "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n";
      }, //obj modificador do bg
      734: (t) => {
        t.exports =
          "precision highp float;\n\nuniform sampler2D texture;\nuniform sampler2D canvasTexture;\nuniform float time;\nuniform float shiftSize;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 uv = vUv;\n  vec2 p = gl_FragCoord.xy;\n\n  vec4 gc = texture2D(canvasTexture, uv);\n  float gr = gc.r;\n  float gg = gc.g;\n  float gb = gc.b;\n  float ga = ceil(gc.a * 10.0) / 10.0;\n\n  //* Scan Line\n  float scanLine = (1.0 + sin(p.y * 5.0 + time)) * 0.5;\n  scanLine = 0.5 + 0.5 * (1.0 - pow(scanLine, 3.0));\n\n  uv.x += shiftSize * gg;\n\n  //* Pixelate\n  float divide = (0.25 + 0.75 * ga) * 512.0;\n  uv.x = gr > 0.0 ? ceil(uv.x * divide) / divide : uv.x;\n  uv.y = gr > 0.0 ? ceil(uv.y * divide) / divide : uv.y;\n\n  //* Chromatic Aberration\n  // vec4 renderColor = texture2D(texture, uv);\n  float rDiff = +gr * 0.002;\n  float bDiff = -gr * 0.002;\n  float r = texture2D(texture, uv + vec2(rDiff, 0.0)).r;\n  float g = texture2D(texture, uv                   ).g;\n  float b = texture2D(texture, uv + vec2(bDiff, 0.0)).b;\n  vec4 renderColor = vec4(r, g, b, 1.0);\n\n  //* Color Modification\n  renderColor.rgb *= gr > 0.0 ? 0.8 : 0.5;\n  renderColor.rgb += gr > 0.0 ? vec3(0.0, 18.0 / 256.0, 135.0 / 256.0) : vec3(0.0);\n  renderColor.rgb += gg > 0.0 ? vec3(1.0, 0.0, 0.0) * gg : vec3(0.0);\n\n  //* Scan Line\n  renderColor.rgb *= gr > 0.0 ? scanLine : 1.0;\n\n  //* Stroke Rect\n  renderColor.rgb += vec3(0.25) * gb;\n\n  vec4 result = renderColor;\n  gl_FragColor = result;\n  // gl_FragColor = gc;\n}\n";
      }, //obj para personalizar algumas caracteristicas das celulas
      561: (t) => {
        t.exports =
          "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n";
      }, //obj modificador do tamanho do pai das celulas
    },
    i = {};
  function n(t) {
    var s = i[t];
    if (void 0 !== s) return s.exports;
    var o = (i[t] = { exports: {} });
    return e[t](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (t = []),
    (n.O = (e, i, s, o) => {
      if (!i) {
        var r = 1 / 0;
        for (l = 0; l < t.length; l++) {
          for (var [i, s, o] = t[l], h = !0, a = 0; a < i.length; a++)
            (!1 & o || r >= o) && Object.keys(n.O).every((t) => n.O[t](i[a]))
              ? i.splice(a--, 1)
              : ((h = !1), o < r && (r = o));
          if (h) {
            t.splice(l--, 1);
            var c = s();
            void 0 !== c && (e = c);
          }
        }
        return e;
      }
      o = o || 0;
      for (var l = t.length; l > 0 && t[l - 1][2] > o; l--) t[l] = t[l - 1];
      t[l] = [i, s, o];
    }),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (t, e) => {
      for (var i in e)
        n.o(e, i) &&
          !n.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t = { 792: 0 };
      n.O.j = (e) => 0 === t[e];
      var e = (e, i) => {
          var s,
            o,
            [r, h, a] = i,
            c = 0;
          if (r.some((e) => 0 !== t[e])) {
            for (s in h) n.o(h, s) && (n.m[s] = h[s]);
            if (a) var l = a(n);
          }
          for (e && e(i); c < r.length; c++)
            (o = r[c]), n.o(t, o) && t[o] && t[o][0](), (t[o] = 0);
          return n.O(l);
        },
        i = (globalThis.packAnimation = globalThis.packAnimation || []);
      i.forEach(e.bind(null, 0)), (i.push = e.bind(null, i.push.bind(i)));
    })();
  var s = n.O(void 0, [121], () => n(624));
  s = n.O(s);
}
