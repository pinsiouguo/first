const database = {
    set(key, value) {
        localStorage.setItem(key, value);
    },
    get(key) {
        return localStorage.getItem(key);
    }
}

let vm = Vue.createApp({
    data() {
        return {
            pending: [],
            done: [],
            itemValue: '',
        }
    },
    methods: {
        doAddItem() {
            let value = this.itemValue;
            if (!value) {
                Swal.fire({
                    title: '新增錯誤',
                    text: '請輸入項目名稱',
                    icon: 'error',
                }).then(() => {
                    setTimeout(() => {
                        this.$refs.itemValue.focus();
                    }, 500)
                })
                return;
            }
            this.pending.push(value);
            this.itemValue = '';
            // 輸入完選項後清空
            this.$refs.itemValue.focus();
        },
        toDone(index) {
            let value = this.pending[index];
            this.done.push(value);
            this.pending.splice(index, 1);

            // console.log(index, value);
            // 把代辦項目搬移到已完成資料內
            // 刪除目前代辦項目
        },
        toPending(index) {
            let value = this.done[index];
            this.pending.push(value);
            this.done.splice(index, 1);
        }
    }
}).mount('#app');