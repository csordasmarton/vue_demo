<template>
  <div>
    <h1>Exercise</h1>
    <p>Create a simple application which can add and show user comments. The
      main features are the following:
      <ul>
        <li>
          Create a new view component called <i>Comments</i>.
        </li>
        <li>
          Create a new menu item in the <i>TheHeader</i> component and register
          a new router in the router/index.js file.
        </li>
        <li>
          Create a new component called <i>NewComment</i>, register and use it
          in the <i>Comments</i> component. It will contain a <i>textarea</i>
          and a <i>button</i>. The user can give comment
          message in the <i>textarea</i> and on <i>button</i> click a new
          message will be created. Store comments in a list in the
          <i>Comments</i> component.
        </li>
        <li>
          Create a new <i>UserComment</i> component which will show a single
          comment. Show the message and also create a remove button.
        </li>
        <li>
          Encode the message by using the <i>window.btoa</i> function and
          decode the message by using the <i>window.atob</i> function.
        </li>
        <li>
          On every new comment create a system comment and reate a new
          <i>SystemComment</i> component to show them.
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: "Exercise"
}
</script>