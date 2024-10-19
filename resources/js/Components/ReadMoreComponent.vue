<script>
export default {
    props: [
        'fullText',
    ],
    data() {
        return {
            readMore: false,
            isOpened: false,
        }
    },
    mounted() {

    },
    methods: {
        //
    }
}
</script>

<template>
    <div>
        <p v-if="readMore"
           class="hidden lg:block leading-8 text-white"
           style="font-family:'Times New Roman';margin-top:-10px;"
           v-html="fullText"></p>
        <p v-else
           class="hidden lg:block leading-8 text-white"
           style="font-family:'Times New Roman';margin-top:-10px;"
           v-html="fullText.substring(0, 230)"></p>
        <span class="text-white cursor-pointer underline text-yellow-400" @click="isOpened = true">Read more...</span>

        <VueSidePanel
            v-model="isOpened"
            lock-scroll
            width="600px"
        >
            <div class="p-10 bg-gray-200">
                <p v-html="fullText"></p>
            </div>
        </VueSidePanel>
    </div>
</template>
