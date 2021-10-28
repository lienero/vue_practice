<template>
  <div>
    <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
    <child-component ref="child_component" />
  </div>
</template>
<script>
// 컴포넌트 import
import ChildComponent from "./ChildComponent5.vue";
export default {
  components: { ChildComponent },
  computed: {
    msg() {
      // computed 옵션을 이용하여 msg 값을 바로 감지.
      // 자식 컴포넌트의 데이터가 변경될 때 마다 $emit을 통해 변경된 데이터를 전송하지 않아도 변경된 값을 항상 확인 가능하다.
      return this.$refs.child_component.msg;
    }
  },
  methods: {
    checkChild() {
      alert(this.msg);
    }
  }
};
</script>
