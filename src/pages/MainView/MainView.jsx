import Item from "../../components/Item/Item";

const MainView = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" }}>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "60px",
          marginLeft: "16px",
        }}
      >
        <h1
          style={{
            color: "blue",
            fontSize: "1.2em",
            marginLeft: "20px",
            border: "1px solid black",
          }}
        >
          LIST VIEW
        </h1>
        <section
          style={{
            display: "flex",
            flex: "row",
            justifyContent: "flex-end",
            border: "1px solid black",
            alignItems: "left",
            margin: "20px 16px 16px 0",
          }}
        >
          <input
            placeholder={"SEARCH"}
            style={{
              backgroundColor: "pink",
              padding: "10px",
              textAlign: "right",
              width: "250px",
              fontSize: "1.2em",
            }}
          />
        </section>
      </section>

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
    </div>
  );
};

export default MainView;
