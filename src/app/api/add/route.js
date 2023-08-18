import { NextResponse } from "next/server";
import connectMongo from "../../../../db/conn";

const Task = require("../../../../models/task");

export async function GET(req) {
  try {
    // await connectMongo();
    // const test = await Task.create(request.body);
    return NextResponse.json("test success");
  } catch (error) {
    return NextResponse.json(err);
  }
}
