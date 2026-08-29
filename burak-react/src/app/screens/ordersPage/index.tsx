import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Tabs,
  Tab,
  Stepper,
  Step,
  StepLabel,
  Divider,
  Button,
  Avatar,
} from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CancelIcon from "@mui/icons-material/Cancel";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

interface OrderItem {
  id: string;
  date: string;
  status: "PROCESS" | "DELIVERED" | "CANCELLED";
  activeStep: number;
  total: number;
  items: { name: string; quantity: number; price: number; img: string }[];
  address: string;
}

const ORDERS_DATA: OrderItem[] = [
  {
    id: "BK-98421",
    date: "Aug 29, 2026 &bull; 19:45",
    status: "PROCESS",
    activeStep: 2,
    total: 89.0,
    address: "Amir Timur St. 45, Apt 12, Tashkent",
    items: [
      {
        name: "Burak Giant Tomahawk Steak",
        quantity: 1,
        price: 48.0,
        img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=150&q=80",
      },
      {
        name: "Gaziantep Pistachio Baklava",
        quantity: 2,
        price: 29.0,
        img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=150&q=80",
      },
      {
        name: "Traditional Ottoman Ayran",
        quantity: 2,
        price: 10.0,
        img: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=150&q=80",
      },
    ],
  },
  {
    id: "BK-94710",
    date: "Aug 26, 2026 &bull; 13:20",
    status: "DELIVERED",
    activeStep: 3,
    total: 56.4,
    address: "Navoi Avenue 18, Business Center, Tashkent",
    items: [
      {
        name: "Sultan Meter Kebab",
        quantity: 1,
        price: 36.5,
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=150&q=80",
      },
      {
        name: "Golden Cheddar Burger",
        quantity: 1,
        price: 19.9,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&q=80",
      },
    ],
  },
];

const steps = ["Order Received", "Chef Preparing", "Out for Delivery", "Delivered"];

export function OrdersPage() {
  const [tabVal, setTabVal] = useState("ALL");

  const filteredOrders = ORDERS_DATA.filter((o) => {
    if (tabVal === "ALL") return true;
    return o.status === tabVal;
  });

  return (
    <Box sx={{ py: 6, minHeight: "85vh" }}>
      <Container maxWidth="lg">
        {/* Header Title */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
            <ReceiptLongIcon sx={{ fontSize: 32, color: "primary.main" }} />
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Order History & Tracking
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            Monitor live preparation stages and review receipts of past dining experiences.
          </Typography>
        </Box>

        {/* Status Tabs */}
        <Tabs
          value={tabVal}
          onChange={(_, val) => setTabVal(val)}
          sx={{
            mb: 4,
            "& .MuiTabs-indicator": { backgroundColor: "#f59e0b", height: 3 },
            "& .MuiTab-root": {
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#64748b",
              "&.Mui-selected": { color: "#0f172a" },
            },
          }}
        >
          <Tab label="ALL ORDERS" value="ALL" />
          <Tab label="IN PROCESS" value="PROCESS" />
          <Tab label="DELIVERED" value="DELIVERED" />
          <Tab label="CANCELLED" value="CANCELLED" />
        </Tabs>

        {/* Order Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
          {filteredOrders.map((order) => (
            <Card
              key={order.id}
              sx={{
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.05)",
                overflow: "hidden",
              }}
            >
              {/* Card Header */}
              <Box
                sx={{
                  bgcolor: "#0f172a",
                  color: "#fff",
                  px: { xs: 2.5, md: 4 },
                  py: 2.5,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", sm: "center" },
                  gap: 1.5,
                }}
              >
                <div>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: "#fff" }}>
                    Order #{order.id}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#94a3b8" }}>
                    Placed on {order.date}
                  </Typography>
                </div>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Chip
                    icon={
                      order.status === "PROCESS" ? (
                        <AccessTimeFilledIcon sx={{ color: "#fff !important", fontSize: 16 }} />
                      ) : order.status === "DELIVERED" ? (
                        <CheckCircleIcon sx={{ color: "#fff !important", fontSize: 16 }} />
                      ) : (
                        <CancelIcon sx={{ color: "#fff !important", fontSize: 16 }} />
                      )
                    }
                    label={order.status}
                    sx={{
                      bgcolor:
                        order.status === "PROCESS"
                          ? "#f59e0b"
                          : order.status === "DELIVERED"
                          ? "#10b981"
                          : "#ef4444",
                      color: "#fff",
                      fontWeight: 800,
                      borderRadius: 2,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 800, color: "#f59e0b" }}>
                    ${order.total.toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                {/* Stepper Progress */}
                {order.status !== "CANCELLED" && (
                  <Box sx={{ mb: 4, pt: 1 }}>
                    <Stepper activeStep={order.activeStep} alternativeLabel>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel
                            sx={{
                              "& .MuiStepLabel-label": {
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                color: "#64748b",
                                "&.Mui-active": { color: "#f59e0b", fontWeight: 700 },
                                "&.Mui-completed": { color: "#10b981" },
                              },
                              "& .MuiStepIcon-root.Mui-active": { color: "#f59e0b" },
                              "& .MuiStepIcon-root.Mui-completed": { color: "#10b981" },
                            }}
                          >
                            {label}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                  </Box>
                )}

                <Divider sx={{ mb: 3 }} />

                {/* Ordered Items List */}
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#0f172a", mb: 2 }}>
                  ORDERED ITEMS ({order.items.length})
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
                  {order.items.map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        bgcolor: "#f8fafc",
                        p: 1.5,
                        borderRadius: 3,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Avatar
                          src={item.img}
                          variant="rounded"
                          sx={{ width: 52, height: 52, borderRadius: 2 }}
                        />
                        <div>
                          <Typography variant="body1" sx={{ fontWeight: 700, color: "#0f172a" }}>
                            {item.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Quantity: {item.quantity}x &bull; ${item.price.toFixed(2)} each
                          </Typography>
                        </div>
                      </Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#0f172a" }}>
                        ${(item.quantity * item.price).toFixed(2)}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Delivery Address & Actions Footer */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: 2,
                    pt: 2,
                    borderTop: "1px solid #f1f5f9",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <DeliveryDiningIcon sx={{ color: "primary.main" }} />
                    <Typography variant="body2" sx={{ color: "#64748b" }}>
                      Delivery Address: <strong style={{ color: "#0f172a" }}>{order.address}</strong>
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", gap: 1.5 }}>
                    <Button variant="outlined" color="inherit" size="small" sx={{ borderRadius: 2 }}>
                      Download Invoice
                    </Button>
                    <Button variant="contained" color="primary" size="small" sx={{ borderRadius: 2, fontWeight: 700 }}>
                      Reorder Items
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}

          {filteredOrders.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                No orders in this category
              </Typography>
              <Typography variant="body2" color="text.secondary">
                You currently have no orders matching the selected filter.
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
