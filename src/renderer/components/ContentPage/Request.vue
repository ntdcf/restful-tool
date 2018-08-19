<template>
    <Content :style="{padding: '20px', minHeight: '280px', background: '#fff'}">
        <Input v-model="requestContent.requstUrl">
            <Select slot="prepend" style="width: 80px" v-model="requestContent.requstMethod">
                <Option v-for="requestMethod in requestMethods" :value="requestMethod.value" :key="requestMethod.value">
                    {{ requestMethod.type }}
                </Option>
            </Select>
            <Button slot="append" v-on:click="sendRequst()">Send</Button>
        </Input>
        
        <div :style="{padding: '5px', Height: '100%'}">
            <Tabs value="name1">
                <TabPane label="Body" name="name1">
                        <highlight-code :lang="this.responseContent.responseType">
                            {{ contentResponse }}
                        </highlight-code>
                </TabPane>
                <!-- <TabPane label="Preview" name="name2">
                    <Card :style="{padding: '10px', Height: '1000px'}">
                        <div v-html="contentResponse">{{contentResponse}}</div>
                    </Card>  
                </TabPane> -->
                <TabPane label="Header" name="name3">
                    <highlight-code lang="json">
                        {{ contentHeaders }}
                    </highlight-code>
                </TabPane>
            </Tabs>
            
        </div>
    </Content>
</template>

<script>
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
                requstUrl:''
            },
            contentResponse: '',
            previewUrl: '',
            contentHeaders: '',
            responseContent: {
                responseType: ''
            }
        }
    },
    methods: {
        sendRequst() {
            var method = this.requestMethods[this.requestContent.requstMethod - 1].type
            this.previewUrl = this.requestContent.requstUrl

            // let options = {
                // method: method,
                // url: this.requestContent.requstUrl,
                // form: content,
                // headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded'
                // }
            // }

            let options = this.formatDatas(method, this.previewUrl)
            
            request(options, (err, response, body) => {
                this.contentHeaders = response.headers
                try {
                    this.contentResponse = JSON.parse(body)
                    this.responseContent.responseType = 'json'
                } catch (error) {
                    this.responseContent.responseType = 'html'
                    this.contentResponse = body
                }    
            })
        },

        formatDatas(method, url, datas, headers) {
            if (method == undefined) {
                method = 'GET'
            }
            
            if ( url.substr(0,7) == 'http://' || url.substr(0, 8) == 'https://') {
                url = url
            } else {
                url = 'http://' + url
            }
            return {
                method: method,
                url: url
            }
        }

    }
}
</script>

