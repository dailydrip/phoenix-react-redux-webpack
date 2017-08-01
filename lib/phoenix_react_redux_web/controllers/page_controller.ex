defmodule PhoenixReactReduxWeb.PageController do
  use PhoenixReactReduxWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
