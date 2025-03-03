## **🔥 方法 2：改用 `createAsyncThunk`，让 `dispatch()` 返回 `id`**

**如果 `id` 来自后端，可以用 `createAsyncThunk` + `unwrap()` 获取返回值**。

```
javascript
复制编辑
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 异步 action，模拟后端生成 ID
export const addItem = createAsyncThunk("items/addItem", async (data) => {
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve({ id: Math.random().toString(36).slice(2), ...data }), 500)
  );
  return response; // { id: "random123", name: "New Item" }
});

const itemsSlice = createSlice({
  name: "items",
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addItem.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
  },
});

export default itemsSlice.reducer;
```

### **📌 组件中使用 `unwrap()`**

```
javascript
复制编辑
const handleAddItem = () => {
  dispatch(addItem({ name: "New Item" }))
    .unwrap()
    .then((newItem) => {
      console.log("新对象 ID:", newItem.id);
      dispatch(someOtherAction(newItem.id));
    });
};
```

**✅ 适用于：**

-   `id` 由后端生成并返回。
-   需要确保 `dispatch` 之后立刻拿到 `id`。

**⚠️ 适用于异步情况，不适用于同步生成 `id`（`nanoid()`）。**


## **方法 3：用 `callback`（适用于 `dispatch` 需要返回值）**

**如果 `dispatch` 不能返回 `id`，但可以在 `reducer` 里触发 `callback`，可以这样做：**

### **📌 `reducer` 修改**

```
javascript
复制编辑
const itemsSlice = createSlice({
  name: "items",
  initialState: { list: [] },
  reducers: {
    addItem: (state, action) => {
      const newItem = { id: nanoid(), ...action.payload };
      state.list.push(newItem);
      action.payload.callback?.(newItem.id); // 触发 callback
    },
  },
});
export const { addItem } = itemsSlice.actions;
```

### **📌 组件中使用**

```
javascript
复制编辑
const handleAddItem = () => {
  dispatch(
    addItem({
      name: "New Item",
      callback: (newId) => {
        console.log("新对象 ID:", newId);
        dispatch(someOtherAction(newId));
      },
    })
  );
};
```

**✅ 适用于：**

-   需要在 `dispatch` 后立刻拿到 `id`。
-   `reducer` 允许传递 `callback`。