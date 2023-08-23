import Item from "../../components/Item/Item";

const MainView = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" }}>
      <article>
        <h1
          style={{
            color: "blue",
            width: "100%",
            marginLeft: "40px",
            fontSize: "2em",
          }}
        >
          Shopping App
        </h1>

        <div
          style={{
            width: "100%",
            display: "flex",
            flex: "row",
            justifyContent: "flex-end",
          }}
        >
          <input
            placeholder={"Search products..."}
            style={{ padding: "8px", marginBottom: "8px", marginRight: "16px" }}
          />
        </div>

        <section>
          <div
            style={{
              width: "100%",
              minHeight: "80%",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              border: "1px solid black",
              padding: "16px",
            }}
          >
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </section>
      </article>
    </div>
  );
};

export default MainView;
