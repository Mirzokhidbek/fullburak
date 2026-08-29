import { Container, Typography, Box, Button, Grid, Card, CardContent } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            color: "#fff",
            p: { xs: 4, md: 8 },
            borderRadius: 5,
            mb: 6,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Typography variant="overline" sx={{ color: "primary.main", fontWeight: 700, letterSpacing: 2 }}>
            AUTHENTIC TURKISH FLAVORS
          </Typography>
          <Typography variant="h2" sx={{ my: 2, fontWeight: 800, fontSize: { xs: "2rem", md: "3.5rem" } }}>
            Experience the Culinary Art of <span style={{ color: "#f59e0b" }}>Burak</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "#94a3b8", mb: 4, maxWidth: 600, fontSize: "1.1rem" }}>
            Handcrafted kebabs, sizzling steaks, rich Turkish desserts, and fresh specialties prepared with passion and tradition.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate("/products")}
              startIcon={<RestaurantMenuIcon />}
            >
              Order Online
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
              size="large"
              onClick={() => navigate("/orders")}
              startIcon={<DeliveryDiningIcon />}
            >
              Track Orders
            </Button>
          </Box>
        </Box>

        {/* Feature Cards */}
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <RestaurantMenuIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Artisan Menu
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Premium cut steaks, wood-fired special dishes, and legendary oversized Turkish creations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <DeliveryDiningIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Express Delivery
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fast, temperature-controlled delivery bringing freshly grilled delicacies straight to your doorstep.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <StarIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 1 }}>
                  5-Star Hospitality
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Unmatched hospitality and culinary experience praised by millions worldwide.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
