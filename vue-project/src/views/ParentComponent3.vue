<template>
  <div>
    <!-- 부모 컴포넌트에서 자식 컴포넌트인 child-component에 ref="child_component"를 지정하여, $ref로 접근할 수 있게 하였다. -->
    <child-component @send-message="sendMessage" ref="child_component" />
    <button type="button" @click="changeChildData">Change Child Data</button>
  </div>
</template>
<script>
// 컴포넌트 import
import ChildComponent from "./ChildComponent3.vue";
export default {
  components: { ChildComponent },
  // ref="id"를 지정하면 vue 컴포넌트 함수에서 this.$refs를 통해 접근이 가능하다.
  // ref 속성은 html 태그에서 사용되는 id와 비슷한 기능을 사용한다.
  // ref은 유일한 키 값을 사용해야만 합니다.
  // 부모 컴포넌트에서 자식 컴포넌트의 데이터 옶션 값을 직접 변경
  methods: {
    changeChildData() {
      this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
    }
  }
};
</script>
