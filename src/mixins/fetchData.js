export default function (defaultDataValue = null) {
    return {
        data() {
            return {
                Data: defaultDataValue,
                isLoading: true
            }
        },
        async created() {
            this.Data = await this.fetchData();
            this.isLoading = false;
        }
    }
}