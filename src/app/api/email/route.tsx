import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        console.log("request",request);


        return NextResponse.json({ message: 'Successfully Sent' })
    } catch (error) {

      console.error('Error:', error);
      return NextResponse.json({ error: 'Something went wrong' });
    }
  }