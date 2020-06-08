<script>
/**
  使用说明：
  属性            类型          作用                                                 案例
  formItems       Array         配置表单item
                                                                                    [
                                                                                      {
                                                                                        controlName: "input",       // 控件的类型
                                                                                        label: "批次号",             // 控件的名字
                                                                                        type: "text",               // 控件对应的类型  例如input 可以是'text' 'number' 'password'之类的
                                                                                                                    // 如果是控件类型的，那么可以是'daterange'等
                                                                                        placeholder: "请输入批次号",  
                                                                                        model: "batchNo",           // ！！！注意model属性要和formModel的属性要对应
                                                                                        key: "batchNo",             // 用于v-key绑定
                                                                                        colSpan: '20'               // 当前一个控件的占比
                                                                                        hidden: true,               // 代表当前控件处于显示还是隐藏，如果不写hidden属性，默认是显示的
                                                                                      }
                                                                                      ...
                                                                                    ]
  
  formModel       Object        配置表单的model，便于v-model双向绑定
                                                                                    {                    // ！！！注意formModel的属性要对应formItems的"model"属性值
                                                                                      name: '',
                                                                                      age: '',
                                                                                      page: 1,
                                                                                      pageSize: 10
                                                                                      ...
                                                                                    }

  formLayouts     Object        配置表单的布局
                                                                                    {
                                                                                      gutter: 20,           // 组件el-row的gutter属性
                                                                                      colSpan: 6,           // 组件el-col的span属性
                                                                                      labelWidth: '90px'    // 组件el-form的label-width属性
                                                                                    }

  eventFun        Function      点击重置或者搜索的回调函数
  inline          Boolean       代表是否表单内联
 */
</script>

<template>
    <div class="sd-search-form">
        <el-form
            ref="form"
            :model="formModel"
            :inline="false"
            :label-width="formLayouts.labelWidth"
        >
            <el-row :gutter="formLayouts.gutter">
                <el-col
                    :sm="12"
                    :md="8"
                    :lg="6"
                    v-for="(formItem, index) in formItems"
                    :key="formItem.key || index"
                >
                    <transition name="el-zoom-in-top">
                        <el-form-item
                            :label="formItem.label"
                            :prop="formItem['model']"
                            v-show="!formItem.hidden"
                        >
                            <!-- type === input-->
                            <el-col
                                :span="formItem.colSpan || defaultColSpan"
                                v-if="formItem.controlName === 'input'"
                            >
                                <el-input
                                    v-model="formModel[formItem['model']]"
                                    :placeholder="formItem.placeholder"
                                    :clearable="formItem.clearable"
                                    :type="formItem.type || 'text'"
                                    @change="controlChange(formItem['model'])"
                                >
                                </el-input>
                            </el-col>

                            <!-- type === select -->
                            <el-col
                                :span="formItem.colSpan || defaultColSpan"
                                v-else-if="formItem.controlName === 'select'"
                            >
                                <el-select
                                    v-model="formModel[formItem['model']]"
                                    :placeholder="formItem.placeholder"
                                    :clearable="formItem.clearable"
                                    filterable
                                    @change="controlChange(formItem['model'])"
                                >
                                    <el-option
                                        :label="option.label"
                                        :value="option.value"
                                        v-for="(option,
                                        index) in formItem.options"
                                        :key="option.key || index"
                                    ></el-option>
                                </el-select>
                            </el-col>

                            <!-- type === datePicker -->
                            <el-col
                                :span="formItem.colSpan || defaultColSpan"
                                v-else-if="
                                    formItem.controlName === 'datePicker'
                                "
                            >
                                <el-date-picker
                                    v-model="formModel[formItem['model']]"
                                    :type="formItem.type"
                                    :placeholder="formItem.placeholder"
                                    :clearable="formItem.clearable"
                                    :picker-options="
                                        formItem.pickerOptions || {}
                                    "
                                    :range-separator="
                                        formItem.rangeSeparator || '-'
                                    "
                                    :start-placeholder="
                                        formItem.startPlaceholder || ''
                                    "
                                    :end-placeholder="
                                        formItem.endPlaceholder || ''
                                    "
                                    :format="formItem.format || 'yyyy-MM-dd'"
                                    @change="controlChange(formItem['model'])"
                                >
                                </el-date-picker>
                            </el-col>

                            <!-- type === switch -->
                            <el-col
                                :span="formItem.colSpan || defaultColSpan"
                                v-else-if="formItem.controlName === 'switch'"
                            >
                                <el-switch
                                    v-model="formModel[formItem['model']]"
                                    :active-text="formItem.activeText || ''"
                                    :inactive-text="formItem.inactiveText || ''"
                                    :active-color="
                                        formItem.activeColor || '#409EFF'
                                    "
                                    :inactive-color="
                                        formItem.inactiveColor || '#C0CCDA'
                                    "
                                    :disabled="formItem.disabled || false"
                                    @change="controlChange(formItem['model'])"
                                >
                                </el-switch>
                            </el-col>

                            <!-- type === checkbox-group -->
                            <el-col
                                :span="formItem.colSpan || defaultColSpan"
                                v-else-if="
                                    formItem.controlName === 'checkbox-group'
                                "
                            >
                                <el-checkbox-group
                                    v-model="formModel[formItem['model']]"
                                    @change="controlChange(formItem['model'])"
                                >
                                    <el-checkbox
                                        v-for="(checkbox,
                                        index) in formItem.checkboxes"
                                        :label="checkbox.label"
                                        :key="checkbox.key || index"
                                    ></el-checkbox>
                                </el-checkbox-group>
                            </el-col>
                        </el-form-item>
                    </transition>
                </el-col>
            </el-row>

            <el-row :gutter="formLayouts.gutter">
                <div class="sd-search-form-operation">
                    <div class="sd-search-form-btn" style="flex: 1;">
                        <span class="search_button" @click="reset">重置</span>
                        <span
                            class="search_button"
                            style="margin-left: 10px;"
                            @click="search"
                            >查询</span
                        >
                    </div>
                    <div
                        class="left_span sd-search-form-expand"
                        style="flex: 0 0 50px;"
                        @click="toggleSearch"
                        v-if="showHiddenParts"
                    >
                        <div v-if="toggleSearchParts === 'up'">
                            <i class="upArrow"></i><br />收起
                        </div>
                        <div v-else-if="toggleSearchParts === 'down'">
                            <i class="downArrow"></i><br />展开
                        </div>
                    </div>
                </div>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import "element-ui/lib/theme-chalk/base.css";
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";
import { isFunction } from "../../utils/common/index";

export default {
    /** 来自于父组件 */
    props: {
        /** form表单配置 */
        formItems: {
            default: [],
            type: Array,
        },
        formModel: {
            default: {},
            type: Object,
        },
        /** 布局配置 */
        formLayouts: {
            default: {
                gutter: 20,
                colSpan: 6,
                labelWidth: "90px",
            },
            type: Object,
        },
        /** callBack */
        eventFun: {
            default: null,
            type: Function,
        },
        inline: {
            default: true,
            type: Boolean,
        },
    },
    components: {
        CollapseTransition,
    },
    data() {
        return {
            defaultColSpan: 20,
            showHiddenParts: false,
            /** 该属性存在2个值： 'up'(收起) 'down'(展开) */
            toggleSearchParts: "",
        };
    },
    methods: {
        /**
         * @callback
         * @desc  选择项发生变化
         */
        controlChange(model) {
            isFunction(this.eventFun) &&
                this.eventFun({
                    action: "formControlChange",
                    modelName: model,
                });
        },
        /**
         * @func
         * @desc 重置
         */
        reset() {
            for (const key in this.formModel) {
                this.formModel[key] = (key === "page" && 1) || null;
            }

            isFunction(this.eventFun) && this.eventFun({ action: "reset" });
        },
        /**
         * @func
         * @desc 查询
         */
        search() {
            isFunction(this.eventFun) && this.eventFun({ action: "search" });
        },
        /**
         * @func
         * @desc 设置data中的值
         */
        initSearchPartsValue({ source }) {
            if (Object.prototype.toString.call(source) !== "[object Array]") {
                throw Error("formItems应该为数组类型");
            }

            this["showHiddenParts"] = source.some((item) =>
                item.hasOwnProperty("hidden")
            );
            this["toggleSearchParts"] =
                (this["showHiddenParts"] && "down") || "";
        },
        /**
         * @func
         * @desc 收起展开的开关
         */
        toggleSearch() {
            this.toggleSearchParts =
                this.toggleSearchParts === "up" ? "down" : "up";

            this.formItems.forEach((item, i) => {
                if (item.hasOwnProperty("hidden")) {
                    item["hidden"] = this.toggleSearchParts === "down";
                }
            });
        },
    },
    created() {
        this.initSearchPartsValue({ source: this.formItems });
    },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
