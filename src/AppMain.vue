<template>
  <main>
    <!-- It contains an article -->
    <article>
      <h2>{{keyword}}Article heading</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>

      <h3>Subsection</h3>

      <p>Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.</p>

      <p>Pelientesque auctor nisi id magna consequat sagittis. Curabitur dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.</p>

      <h3>Another subsection</h3>

      <p>Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum soclis natoque penatibus et manis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>

      <p>Vivamus fermentum semper porta. Nunc diam velit, adipscing ut tristique vitae sagittis vel odio. Maecenas convallis ullamcorper ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, is fringille sem nunc vet mi.</p>
    </article>

    <!-- the aside content can also be nested within the main content -->
    <aside>
      <h2>Related</h2>

      <ul>
        <li>
          <a href="#">Oh I do like to be beside the seaside</a>
        </li>
        <li>
          <a href="#">Oh I do like to be beside the sea</a>
        </li>
        <li>
          <a href="#">Although in the North of England</a>
        </li>
        <li>
          <a href="#">It never stops raining</a>
        </li>
        <li>
          <a href="#">Oh well...</a>
        </li>
      </ul>
    </aside>
  </main>
</template>

<script>
export default {
  computed: {
    keyword() {
      return this.$store.state.keyword;
    }
  }
};
</script>

<style>
main {
  display: flex;
}

article {
  flex: 4;
}

aside {
  flex: 1;
  margin-left: 10px;
  background-color: #ff80ff;
}

aside li {
  padding-bottom: 10px;
}
</style>