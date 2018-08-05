<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark">
                    <div>
                        <!-- <MenuItem name="1">
                          Restful Tool
                        </MenuItem> -->
                        <MenuItem name="2" >
                          <Button v-on:click="openPageWindow()" type="primary">Open Page</Button>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <!-- <Sider hide-trigger :style="{background: '#fff'}">
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['history']">
                                <Submenu name="history">
                                    <template slot="title">
                                        History
                                    </template>
                                    <MenuItem name="1-1">Option 11</MenuItem>
                                    <MenuItem name="1-2">Option 2</MenuItem>
                                    <MenuItem name="1-3">Option 3</MenuItem>
                                </Submenu>
                            </Menu>
                        </Sider> -->
                        <router-view></router-view>
                        <!-- <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            <h1>Hello world</h1>
                        </Content> -->
                    </Layout>
                </Content>
            </Layout>
        </Layout>
    </div>
</div>
</template>
<script>
  export default {
    methods: {
      openPageWindow:function() {
        window.open();
      }
    }
  }
</script>
