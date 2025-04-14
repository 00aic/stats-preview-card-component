<template>
  <div class="card">
    <div class="card__container">
      <div class="card__container-title">
        Get <span>insights</span> that help your business grow.
      </div>
      <div class="card__container-desc">
        Discover the benefits of data analytics and make better decisions regarding revenue,
        customer experience, and overall efficiency.
      </div>
      <div class="card__container-summary">
        <div v-for="item in summary" :key="item.desc">
          <div class="card__container-summary-total">{{ item.total }}</div>
          <div class="card__container-summary-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>

    <div class="card__img-wrapper">
      <picture>
        <!-- 在屏幕宽度小于 768px 时，加载手机尺寸的图片 -->
        <source media="(max-width: 768px)" srcset="@/assets/images/image-header-mobile.jpg" />
        <!-- 在屏幕宽度大于或等于 768px 时，加载桌面尺寸的图片 -->
        <source media="(min-width: 768px)" srcset="@/assets/images/image-header-desktop.jpg" />
        <!-- 如果上面的 media 查询不匹配，加载默认图片 -->
        <img src="@/assets/images/image-header-desktop.jpg" alt="Responsive Image" />
      </picture>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Summary {
  total: string
  desc: string
}
const summary: Summary[] = [
  {
    total: '10k+',
    desc: 'COMPANIES',
  },
  {
    total: '314',
    desc: 'TEMPLATES',
  },
  {
    total: '12M+',
    desc: 'QUERIES',
  },
]
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  max-width: 900px;

  &__container {
    display: flex;
    flex-direction: column;
    background-color: hsl(244, 38%, 16%);
    padding: 50px;
    gap: 15px;
    flex: 1;
    border-radius: 10px 0 0 10px;
    min-width: 0;

    &-title {
      font-size: 28px;
      font-weight: bold;
      color: hsl(0, 0%, 100%);
      line-height: 1.4;
      span {
        color: hsl(277, 64%, 61%);
      }
    }
    &-desc {
      flex-wrap: wrap;
      font-size: 12px;
      color: hsla(0, 0%, 100%, 0.75);
      letter-spacing: 1px;
      line-height: 1.8;
    }
    &-summary {
      display: flex;
      align-items: flex-end;
      flex: 1;
      gap: 80px;

      &-total {
        color: hsl(0, 0%, 100%);
        font-weight: bold;
        font-size: 20px;
      }
      &-desc {
        font-size: 12px;
        color: hsla(0, 0%, 100%, 0.75);
      }
    }
  }
  &__img-wrapper {
    flex: 1;
    background-color: hsl(277, 64%, 61%); // 背景色
    display: inline-block;
    border-radius: 0 10px 10px 0;

    img {
      box-sizing: border-box;
      mix-blend-mode: multiply; // 混合模式
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

@media (max-width: 768px) {
  .card {
    flex-direction: column;
    &__container {
      order: 2;
      text-align: center;
      &-summary {
        flex-direction: column;
        align-self: center;
        gap: 10px;
      }
    }

    &__img-wrapper {
      order: 1;
    }
  }
}
</style>
