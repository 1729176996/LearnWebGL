var mainData,loading;
$(function(){
    FastClick.attach(document.body);
    mainData = new Vue({
        el: "#main",
        data:{
            
        },
        mounted:function(){
            //控制台输出可以查看three.js的版本
            console.log('当前使用的three.js版本：'+THREE.REVISION);
            
            
            // 场景
            var scene = new THREE.Scene();
            // 透视相机
            var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
            // 渲染器
            var renderer = new THREE.WebGLRenderer();
            // 设置渲染器的大小为窗口的内宽度，也就是内容区的宽度
            var content = $('.content');//画面存放容器
            renderer.setSize(content.width(), content.height());
            content.append(renderer.domElement);
            
            //添加物体到场景中
            var geometry = new THREE.CubeGeometry(1,1,1);
            var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
            var cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            camera.position.z = 5;
            
            //渲染
            //renderer.render(scene, camera);
            
            //循环渲染
            function render() {
                cube.rotation.x += 0.1;
                cube.rotation.y += 0.1;
                renderer.render(scene, camera);
                requestAnimationFrame(render);
            }
            render();
        },
        methods:{
            submit:function(){
                
            }
        }
    })
});
