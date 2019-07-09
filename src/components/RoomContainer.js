import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        console.log(value);

        return (
          <div>
            Room Container
            <RoomFilter />
            <RoomList />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
