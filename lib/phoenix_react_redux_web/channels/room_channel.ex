defmodule PhoenixReactReduxWeb.RoomChannel do
  use Phoenix.Channel

  def join("room:lobby", _message, socket) do
    {:ok, socket}
  end

  def handle_in("new_message", %{"message" => message}, socket) do
    IO.inspect message
    broadcast! socket, "new_message", %{message: message}
    {:noreply, socket}
  end

  def join("room:" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "unauthorized"}}
  end
end
