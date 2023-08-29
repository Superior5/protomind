<template>
  <div class="sample">
    <input type="text" name="search" placeholder="поиск по имени ответсвенного" />
    <Icon
      class="cursor-pointer absolute right-0 text-xl btn btn-search m-10px"
      name="iconamoon:search-fill"
    />
  </div>
</template>


<style scoped>
input {
  border: 1px solid #ccc;
  font-size: 0.875rem;
  font-weight: 500;
  height: 90%;
  padding: 4px 8px;
  position: absolute;
  width: 50%;
}

input:focus {
  outline: none;
}

Icon {
  text-align: center;
}

button:focus {
  outline: none;
}

button.btn-search,
button.btn-reset {
  background: hotpink;
  border: none;
  height: 30px;
  font-size: 12px;
  padding: 4px;
  position: absolute;
  width: 30px;
}

.sample {
  float: left;
  height: 50px;
  margin: 0 8%;
  position: relative;
  display: flex;
  align-items: center;
  position: relative;
}

.sample input,
.sample.two input {
  border-radius: 25px;
  right: 0;
  transition: all 0.3s ease-in-out;
  width: 50%;
}

.sample input:focus,
.sample.two input:focus {
  width: 70%;
}

.sample input:focus ~ button.btn-search,
.sample.two input:focus ~ button.btn-search {
  background: rgb(16, 208, 64);
  color: #fff;
}

.sample input:focus ~ button.btn-reset,
.sample.two input:focus ~ button.btn-reset {
  right: -22px;
}

.sample button,
.sample.two button {
  transition: all 0.3s ease-in-out;
}

.sample button.btn-search,
.sample.two button.btn-search {
  background: #ccc;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  position: absolute;
  right: 0;
  margin: 5px;
}

.sample button.btn-reset,
.sample.two button.btn-reset {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-size: 10px;
  height: 20px;
  line-height: 20px;
  padding: 0;
  right: 5px;
  top: 5px;
  width: 20px;
  z-index: -1;
}

@keyframes bounceRight {
  0% {
    transform: translateX(0px);
  }

  50% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0px);
  }
}

@keyframes jumpTowardSearch {
  0% {
    background: #ccc;
    opacity: 1;
    transform: rotateZ(0deg) scale(1);
  }

  20% {
    background: #ccc;
    opacity: 0;
    transform: rotateZ(-60deg) scale(50);
  }

  55% {
    background: hotpink;
    opacity: 0;
    transform: rotateZ(-30deg) scale(100);
  }

  90% {
    background: hotpink;
    opacity: 0;
    transform: rotateZ(-30deg) scale(50);
  }

  100% {
    background: hotpink;
    opacity: 1;
    transform: rotateZ(0deg) scale(1);
  }
}

@keyframes jumpTowardReset {
  0% {
    opacity: 0;
    transform: rotateZ(0deg) scale(1);
  }

  20% {
    opacity: 0;
    transform: rotateZ(-60deg) scale(50);
  }

  55% {
    opacity: 0;
    transform: rotateZ(-30deg) scale(100);
  }

  90% {
    opacity: 0;
    transform: rotateZ(-30deg) scale(50);
  }

  100% {
    opacity: 1;
    transform: rotateZ(0deg) scale(1);
  }
}
</style>