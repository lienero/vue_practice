<template>
  <div>
    <!-- 여기서 지정한 title 값이, 자식 컴포넌트인 PageTitle에 정의된 props의 title에 전달됩니다. -->
    <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달" />
  </div>
</template>
<script>
// 컴포넌트 import
import PageTitle from "../components/PageTitle";
export default {
  // 현재 컴포넌트에서 사용할 컴포넌트 등록
  components: { PageTitle }
};
</script>
