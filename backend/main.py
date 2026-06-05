from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client, Client
from pydantic import BaseModel
from typing import Optional
import os
import random
import string
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="KRATEX Backend API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://kratex.vercel.app", "http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

class InquiryCreate(BaseModel):
    container_type: str
    quantity: int
    destination_port: str
    required_date: str
    budget_range: Optional[str] = None
    contact_name: Optional[str] = None
    contact_email: Optional[str] = None

def generate_reference():
    year = datetime.now().strftime("%Y")
    digits = ''.join(random.choices(string.digits, k=5))
    return f"KTX-{year}-{digits}"

@app.get("/")
def root():
    return {"status": "KRATEX Backend is running", "version": "1.0.0"}

@app.post("/api/inquiry")
def create_inquiry(inquiry: InquiryCreate):
    ref = generate_reference()
    data = {
        "reference_number": ref,
        "container_type": inquiry.container_type,
        "quantity": inquiry.quantity,
        "destination_port": inquiry.destination_port,
        "required_date": inquiry.required_date,
        "budget_range": inquiry.budget_range,
        "contact_name": inquiry.contact_name,
        "contact_email": inquiry.contact_email,
        "status": "pending",
    }
    result = supabase.table("inquiries").insert(data).execute()
    return {"success": True, "reference_number": ref, "message": "Inquiry submitted successfully!"}

@app.get("/api/inquiries")
def get_all_inquiries():
    result = supabase.table("inquiries").select("*").order("created_at", desc=True).execute()
    return {"success": True, "count": len(result.data), "inquiries": result.data}

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "service": "KRATEX Backend"}
