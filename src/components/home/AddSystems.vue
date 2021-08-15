<template>
  <div v-if="show" class="flex flex-col my-12">
    <p class="text-textColor mb-6">Add System</p>
    <div class="w-full h-230 border-borderColor border-dashed border bg-dark flex z-1" @dragover="dragover"
         @drop="drop" @click="chooseFiles()">
      <div class="flex p-3" v-if="preview_list.length">
        <div v-for="(item, index) in preview_list" :key="index">
          <div class="flex flex-col h-80 w-80 px-2 bg-secondary relative mr-2 ">
            <div class="flex justify-end absolute -top-1 -right-1 cursor-pointer close"
                 @click.prevent="removeImage(item)">
              <Close/>
            </div>
            <img :src="item" class="h-full w-full object-cover uploaded"/>
          </div>
        </div>
      </div>
      <div v-show="!preview_list.length" class="w-full flex justify-center items-center cursor-pointer">
        <div class="flex flex-col justify-center items-center max-w-275">
          <input type="file"
                 multiple="multiple"
                 id="fileUpload"
                 @change="previewMultiImage "
                 accept="image/png, image/jpeg" hidden>
          <Upload class="mb-6"/>
          <p class="text-textColor text-center"><span class="text-blue">Choose a file </span> to upload or drag it here
            (jpg, png, max size 5mb)</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Upload from "./svg/Upload";
import Close from "./svg/Close";

export default {
  name: 'AddSystems',
  components: {Close, Upload},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      accept: {
        types: ["image/png", "image/jpeg"],
        size: 0
      },
      preview_list: [],
      image_list: []
    }
  },
  methods: {
    chooseFiles() {
      let className = event.target.getAttribute("class");
      if (className && className.indexOf("close") === -1 && className.indexOf("uploaded") === -1) {
        document.getElementById("fileUpload").click()
      }
    },
    previewMultiImage(event, fileList = []) {
      let files = fileList.length ? fileList : event.target.files;
      let count = files.length;
      let index = 0;
      if (files) {
        while (count--) {
          if (this.isValidFile(files[index])) {
            let reader = new FileReader();
            reader.onload = (e) => {
              this.preview_list.push(e.target.result);
            }
            this.image_list.push(files[index]);
            reader.readAsDataURL(files[index]);
            index++;
          }
        }
      }
    },
    isValidFile(file) {
      let validType = this.accept.types.indexOf(file['type']) !== -1;
      let size = parseInt(Math.floor(Math.log(file['size']) / Math.log(1024)), 10);
      let validSize = this.accept.size <= (file['size'] / (1024 ** size)).toFixed(1) > 0;
      return validType && validSize;
    },
    removeImage(item) {
      this.preview_list.splice(this.preview_list.indexOf(item), 1);
    },
    dragover(event) {
      event.preventDefault();
    },
    drop(event) {
      event.preventDefault();
      this.previewMultiImage(event, event.dataTransfer.files);
    }
  }
}
</script>