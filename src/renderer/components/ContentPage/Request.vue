<template>
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
        <Input v-model="requestContent.requstUrl">
            <Select slot="prepend" style="width: 80px" v-model="requestContent.requstMethod">
                <Option v-for="requestMethod in requestMethods" :value="requestMethod.value" :key="requestMethod.value">
                    {{ requestMethod.type }}
                </Option>
            </Select>
            <Button slot="append" v-on:click="sendRequst()">Send</Button>
        </Input>
        
        <div :style="{padding: '10px', Height: '100%'}">
            <Card>
                <!-- <div> -->
                    <iframe width="100%" :src="previewUrl">
                  
                    </iframe>
                <!-- </div> -->
            </Card>
        </div>
    </Content>
</template>

<script>
import axios from "axios"
import request from 'request'

export default {
    data () {
        return {
            requestMethods: [
                {
                    value: 1,
                    type: "GET"
                },
                {
                    value: 2,
                    type: "POST",
                },
                {
                    value: 3,
                    type: "PUT"
                },
                {
                    value: 4,
                    type: "DELETE"
                },
                {
                    value: 5,
                    type: 'HEAD'
                },
                {
                    value: 6,
                    type: 'OPTION'
                }
            ],
            requestContent:{
                requstMethod: 1,
                requstUrl:'http://www.baidu.com'
            },
            contentResponse: "",
            previewUrl: '',
            
        }
    },
    methods: {
        sendRequst() {
            let method = this.requestMethods[this.requestContent.requstMethod - 1].type
            this.previewUrl = this.requestContent.requstUrl
            let options = {
                method: method,
                url: this.requestContent.requstUrl,
                // form: content,
                // headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded'
                // }
            }

            request(options, (err, response, body) => {
                this.contentResponse = body
                // document.body.innerHTML = this.contentResponse
            })
        }
    }
}
</script>

