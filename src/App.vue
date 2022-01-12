<template>
  <div id="app">
      <Navigation></Navigation>
      <router-view/>
  </div>
</template>

<script>
import * as Three from 'three'

import Navigation from './components/Navigation.vue'
export default {
  components: {
    Navigation
  },
    data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function() {
        let container = document.getElementById('container');

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
        this.camera.position.z = 1;

        this.scene = new Three.Scene();

        //set scene to transparent background
        this.scene.background = new Three.Color(0x0A192F);


        let geo1 = new Three.BoxGeometry(0.2, 0.8, 0.2);
        let material = new Three.MeshBasicMaterial({color: 0x34D399, wireframe: true});


        this.mesh1 = new Three.Mesh(geo1, material);
        this.mesh1.position.y =  -0.2;
        this.mesh1.rotation.y =  Math.PI/2;


        this.scene.add(this.mesh1);


        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

        

    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh1.rotation.y -= 0.01;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      this.init();
      this.animate();
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-gray-300;
}
body {
  /* background-color: #0D1117; */
  @apply pb-12 bg-background;
  /* background-image: url(./assets/background.png);
  background-repeat: no-repeat; */
}

#container {
  position: relative;
  @apply container lg:h-96 lg:w-96 h-52 w-52 mx-auto;
  z-index: -1;
}
</style>
