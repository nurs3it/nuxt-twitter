<template>
  <div>
    <h1>Заголовок 1</h1>
    <h2>Заголовок 1</h2>
    <h3>Заголовок 1</h3>
    <h4>Заголовок 1</h4>
    <h5>Заголовок 1</h5>
    <p class="ui-subtitle">ui-subtitle</p>
    <p class="ui-large-text">ui-large-text</p>
    <p class="ui-normal-text">ui-normal-text</p>
    <p class="ui-small-text">ui-small-text</p>
    <p class="ui-button-text">ui-button-text</p>
    <a href="#">link</a>
    <br>
    <br>
    <u-i-button @method="testMethod"
                :disabled="false"
                :text="'Отправить'"
                :isRectangular="false"
    />
    <u-i-button @method="testMethod"
                :disabled="true"
                :text="'Отправить'"
                :isRectangular="false"
    />
    <u-i-button @method="testMethod"
                :disabled="false"
                :text="'Отправить'"
                :isRectangular="true"
    />
    <u-i-button @method="testMethod"
                :disabled="true"
                :text="'Отправить'"
                :isRectangular="true"
    />
    <br>
    <br>
    <u-i-button @method="testMethod"
                :disabled="false"
                :text="'Отправить'"
                :isRectangular="false"
                :isSmall="true"
    />
    <u-i-button @method="testMethod"
                :disabled="true"
                :text="'Отправить'"
                :isRectangular="false"
                :isSmall="true"
    />
    <u-i-button @method="testMethod"
                :disabled="false"
                :text="'Отправить'"
                :isRectangular="true"
                :isSmall="true"
    />
    <u-i-button @method="testMethod"
                :disabled="true"
                :text="'Отправить'"
                :isRectangular="true"
                :isSmall="true"
    />
  </div>
</template>

<script>
import UIButton from "@/components/UIButton";
export default {
name: "ui",
  components: {UIButton},
  methods: {
    testMethod() {
      console.log("test button")
    }
  },
}
</script>

<style scoped>

</style>
