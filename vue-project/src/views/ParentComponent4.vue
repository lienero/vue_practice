<template>
  <div>
    <child-component @send-message="sendMessage" />
  </div>
</template>
<script>
// 컴포넌트 import
import ChildComponent from "./ChildComponent4.vue";
export default {
  components: { ChildComponent },
  methods: {
    // 커스텀 이벤트인 send-message는 자식 컴포넌트에서 $emit으로 호출하게됩니다.
    // 이때 부모의 컴포넌트에 정의된 sendMessage 함수가 실행되고, 자식 컴포넌트에서 전달받은 데이터를 부모가 사용할 수 있습니다.
    sendMessage(data) {
      console.log(data);
    }
  }
};
</script>
